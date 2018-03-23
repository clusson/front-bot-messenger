'use strict'
import { ViewModelBase } from 'chaudron'
import { intentService } from '../services/intentService'
import { luisService } from '../services/luisService'
import ko from 'knockout'
import { LoggedViewModelBase } from '../vm/loggedViewModel'
import { adminService } from '../services/adminService'
import toastr from 'toastr'

export class CreateViewModel extends LoggedViewModelBase {

    constructor() {
        super()
    }
    synchronise(luisUrl, version) {
        return luisService.getIntents(luisUrl, version)
    }
    loadData() {
        return Promise.all([intentService.getIntents(), adminService.getAdmin(sessionStorage.getItem('userid')), adminService.getAdminIntent(sessionStorage.getItem('userid'))]).then(res => {
            this._apiIntents = res[0].concat(res[2])
            this._admin = res[1]

            return this.synchronise(this._admin.luisApi, this._admin.vLuis)
        }).then((res) => {
            this._arr = res.intents.map(el => {
                const line = this.createLine(el, this._apiIntents.find(apiI => apiI.name === el.intent))
                return line
            })
        })
    }

    createLine(luis, intent = {}) {

        return {
            name: ko.observable(luis.intent),
            isValid: ko.pureComputed(() => {
                if (luis.intent === intent.name)
                    return true
                return false
            }),
            url: ko.observable(''),
            displayUrl: ko.observable(intent.url)
        }
    }
    loadViewModel() {
        console.log('pr', this._arr[0].isValid())

        this.mailLogin = ko.observable()
        this.passwordLogin = ko.observable()

        this.apiIntents = ko.observableArray(this.apiIntents)
        this.arr = ko.observableArray(this._arr)
    }

    validate() {
        const array = this.arr().filter(el => {
            return el.url() != ''
        }).map(el => {
            return {
                mail: sessionStorage.getItem('userid'),
                url: el.url(),
                name: el.name()
            }
        }).map(el => {
            return adminService.createAdminIntent(el)
        })

        Promise.all(array).then(() => {
            toastr.success('Nous avons mis votre bot à jour')
        })

    }


}