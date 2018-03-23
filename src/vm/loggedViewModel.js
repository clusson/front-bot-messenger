import { ViewModelBase } from 'chaudron'

export class LoggedViewModelBase extends ViewModelBase {

    constructor() {
        super()
        if (!sessionStorage.getItem('userid')) {
            window.location.href = 'index.html'
        }
    }

    disconnect() {
        sessionStorage.removeItem('userid')
        window.location.href = 'index.html'
    }
}