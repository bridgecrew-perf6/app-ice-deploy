import Vue from "vue";
import VueRouter from "vue-router";

import tableApi from "@/components/tableApi.vue"
import formInput from "@/components/formInput.vue"

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/tableApi',
            component: tableApi,
            meta: {
                layout: 'default',
            },
        },
        {
            path: '/tableApi',
            component: tableApi,
            meta: {
                layout: 'default',
            },
        },
        {
            path: '/formInput',
            component: formInput,
            meta: {
                layout: 'default',
            },
        },
    ]
})

/**/

export default router;
