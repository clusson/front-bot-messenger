import 'materialize-css'
import { IndexViewModel } from './index/IndexViewModel'
import { CreateViewModel } from './create/CreateViewModel'
import { Framework } from 'chaudron'
export * from './scss/app.scss'

window.onload = () => {

    const routes = [{
        base: 'base.html',
        surfaces: ['nav', 'content'],
        vms: [
            { 'index.html': IndexViewModel },
            { 'create.html': CreateViewModel },
        ]
    }]

    const app = {
        viewModels: routes,
        entryPoint: 'index.html',
        config: { vmContainer: 'body' },
        global: [{
            api: () => 'https://api.hurrycane.fr'
        }]
    }
    Framework.create(app)
}