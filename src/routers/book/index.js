export default {
    path: '/book',
    redirect: '/book/hot',
    component: () => import('@/views/book'),
    children: [
        {
            path: 'hot',
            component: () => import('@/components/bookIndex/hot')
        },
        {
            path: 'all',
            component: () => import('@/components/bookIndex/all')
        },
        {
            path: 'search',
            component: () => import('@/components/bookIndex/search')
        },
        {
            path: 'detail/:bookId',
            components: {
                detail: () => import('@/views/book/detail.vue'),
            },
            props: {
                detail: true
            }
        }
    ]
}