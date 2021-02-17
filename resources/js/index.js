import { App } from '@inertiajs/inertia-svelte'

const el = document.getElementById('app')

let app = new App({
    target: el,
    props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./Pages/${name}.svelte.js`),
    },
})

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.$destroy();
    });
}
