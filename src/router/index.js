import VueRouter from 'vue-router'
import Main from "../pages/Main"
import News from "../pages/News"
import NewsDetail from "../pages/NewsDetail"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
        },
        {
            path: '/news',
            name: 'News',
            component: News,
        },
        {
            path: '/news/:id',
            name: 'NewsDetail',
            component: NewsDetail,
        },
    ]
})