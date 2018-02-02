import { checkStatus } from '../utils/checkStatus'

export const luisService = {

    getIntents(luisUrl, versionId) {
        return fetch(luisUrl + '/versions/' + versionId + '/intents/', {
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