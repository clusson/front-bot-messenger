'use strict'
import { ViewModelBase } from 'chaudron'
import ko from 'knockout'
import { RegisterService } from '../services/registerService'
import toastr from 'toastr'

export class IndexViewModel extends ViewModelBase {

    constructor() {
        super()
    }

    loadData() {
        return new Promise(resolve => {
            resolve()
        })
    }
    loadViewModel() {

        this.mailLogin = ko.observable()
        this.passwordLogin = ko.observable()

        this.mail = ko.observable('')
        this.nom = ko.observable('')
        this.prenom = ko.observable('')
        this.password = ko.observable('')
        this.luis = ko.observable('')
        this.accessToken = ko.observable('')
        this.verifyToken = ko.observable('')
        this.facebookId = ko.observable('')
        this.vLuis = ko.observable('')
    }

    connexion() {
        console.log('FUUUCK TOU ')
        RegisterService.login({
            mail: this.mailLogin(),
            password: this.passwordLogin()
        }).then(response => {
            sessionStorage.setItem('userid', response)
        }).then(() => {
            //   window.location.href = 'create.html'
        }).catch(() => {
            toastr.warning('Mauvais nom d\'utilisateur ou mots de passe')
        })
    }

    reload() {
        this.mail('')
        this.nom('')
        this.prenom('')
        this.password('')
        this.luis('')
        this.accessToken('')
        this.verifyToken('')
        this.facebookId('')
        this.vLuis('')
    }
    register() {
        const parsedObj = {
            nom: this.nom(),
            mail: this.mail(),
            prenom: this.prenom(),
            password: this.password(),
            luisApi: this.luis(),
            accessToken: this.accessToken(),
            verifyToken: this.verifyToken(),
            facebookId: this.facebookId(),
            vLuis: this.vLuis()
        }
        this.reload()

        if (parsedObj.mail != '') {
            RegisterService.register(parsedObj).then(() => {
                toastr.success('Votre compte à bien été créée, vous pouvez maintenant vous y connecter')
            })
        }
    }
}