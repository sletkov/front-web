<template>
  <div class="container">
    <h1>{{ article.name }}</h1>
    <p>{{article.desc}}</p>
    <p>{{article.date}}</p>
    <router-link :to="{path: '/news'}">Назад</router-link>
  </div>
</template>

<script>
import news from '../../public/dist/articles.json'


export default {
  name: "NewsDetail",
  data() {
    return {
      news: news,
      article: news.find(article => article.id == this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>