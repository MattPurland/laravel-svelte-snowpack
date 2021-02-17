import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { App } from '../_snowpack/pkg/@inertiajs/inertia-svelte.js'

const el = document.getElementById('app')

let app = new App({
    target: el,
    props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./Pages/${name}.svelte.js`),
    },
})

if (undefined /* [snowpack] import.meta.hot */ ) {
    undefined /* [snowpack] import.meta.hot */ .accept();
    undefined /* [snowpack] import.meta.hot */ .dispose(() => {
        app.$destroy();
    });
}
