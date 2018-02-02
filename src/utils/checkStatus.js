export const checkStatus = (obj, response) => {
    const code = Object.keys(obj).find(element => response.status + '' === element + '')
    if (!code) {
        throw new Error('Unhandled Error during fetch' + response.status)
    }
    return obj[code](response)
}