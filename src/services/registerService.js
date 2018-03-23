import { checkStatus } from '../utils/checkStatus'
import { Global } from 'chaudron'

export const RegisterService = {

    register(obj) {
        return fetch(Global.api + '/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })

    },

    login(obj) {
        return fetch(Global.api + '/login', {
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