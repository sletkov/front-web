import VueRouter from 'vue-router'
import Main from "../views/Main"
import News from "../views/News"
import NewsDetail from "../views/NewsDetail"
import Gallery from "../views/Gallery"

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
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery,
        },
    ]
})