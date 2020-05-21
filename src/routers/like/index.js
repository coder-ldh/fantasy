export default {
    path:'/like',
    redirect:'/like/allCity',
    component:() => import('@/views/like'),
    // children:[
    //     {
    //         path:'allCity',
    //         component:() => import('@/components/cityIndex/allCity')
    //     },
    //     {
    //         path:'grand',
    //         component:() => import('@/components/cityIndex/grand')
    //     },
    //     {
    //         path:'feature',
    //         component:() => import('@/components/cityIndex/feature')
    //     }
    // ]
}

// component:()=> import()  是按需加载路由，避免在不需要路由的地方加载。