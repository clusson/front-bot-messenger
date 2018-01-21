import { IndexViewModel } from './index/IndexViewModel'
import { Framework } from 'chaudron'
import { config } from '../config'
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
        global: [{
            api: () => config.API
        }]
    }
    Framework.create(app)
}