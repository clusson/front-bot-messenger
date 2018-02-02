import { Global } from 'chaudron'
import { checkStatus } from '../utils/checkStatus'

export const intentService = {

    getIntents() {
        return fetch(Global.api + '/intent', {
            method: 'GET'
        })
            .then(response => checkStatus({
                200: (element) => element.json()
            }, response))
            .then(res => {
                return res
            })
    }
}