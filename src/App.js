import { IndexViewModel } from './index/IndexViewModel'
import { Framework } from 'chaudron'
export * from './scss/app.scss'

window.onload = () => {

    const routes = [{
        base: 'index.html',
        surfaces: ['content'],
        vms: [
            { 'index.html': IndexViewModel },
        ]
    }]

    const app = {
        viewModels: routes,
        entryPoint: 'index.html',
        global: []
    }
    Framework.create(app)
}