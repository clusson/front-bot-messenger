'use strict'
import { ViewModelBase } from 'chaudron'
import { intentService } from '../services/intentService'
import { luisService } from '../services/luisService'
import ko from 'knockout'
import { LoggedViewModelBase } from '../vm/loggedViewModel'

export class CreateViewModel extends LoggedViewModelBase {

    constructor() {
        super()
    }
    synchronise() {
        luisService.getIntents(this.luis_url(), this.version_id()).then(res => {
            this.luisIntents = res
        })
    }
    loadData() {
        return intentService.getIntents().then(res => {
            this.apiIntents = res
        })
    }
    loadViewModel() {
        this.mailLogin = ko.observable()
        this.passwordLogin = ko.observable()

        console.log(this.apiIntents)
        this.luis_url = ko.observable()
        this.version_id = ko.observable()
        this.apiIntents = ko.observableArray(this.apiIntents)
        this.luisIntents = ko.observableArray(this.luisIntents)
    }


}