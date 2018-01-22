'use strict'
import { ViewModelBase } from 'chaudron'
import ko from 'knockout'


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
        this.test = ko.observable('test')
        this.num = ko.observable(0)
        this.num2 = ko.pureComputed(() => this.num() * 2)
        this.array = ko.observableArray([{ nom: 'coucou' }, { nom: 'lol' }])
    }


}