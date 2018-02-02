'use strict'
import { ViewModelBase } from 'chaudron'
import { intentService } from '../services/intentService'
import ko from 'knockout'

export class CreateViewModel extends ViewModelBase {

    constructor() {
        super()
    }
    synchronise() {

    }
    loadData() {
        return intentService.getIntents().then(res => {
            this.intents = res
        }
        )
    }
    loadViewModel() {
        this.num = ko.observable(0)
        this.res = ko.observableArray(this.intents)
    }


}