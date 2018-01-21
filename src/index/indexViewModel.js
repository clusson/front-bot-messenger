'use strict'
import { ViewModelBase } from 'chaudron'
import ko from 'knockout'
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
        this.test = ko.observable('test')
    }


}