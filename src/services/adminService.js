import { Global } from 'chaudron'
import { checkStatus } from '../utils/checkStatus'

export const adminService = {

    getAdmin(mail) {
        return fetch(Global.api + '/admin/' + mail, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => checkStatus({
                200: (element) => element.json()
            }, response))
            .then(res => {
                return res
            })
    },

    getAdminIntent(mail) {
        return fetch(Global.api + '/admin-intent/' + mail, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => checkStatus({
                200: (element) => element.json()
            }, response))
            .then(res => {
                return res
            })
    },

    createAdminIntent(obj) {
        return fetch(Global.api + '/admin-intent', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(obj)
        })
            .then(response => checkStatus({
                200: () => response
            }, response))
    }
}