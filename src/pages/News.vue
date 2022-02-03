<template>
  <div class="container">
    <h1>Новости</h1>

    <ul class="list">
      <li v-for="(article, index) in news" :key="index" class="s">
        <h2><router-link :to="{path: `news/${article.id}`}">{{index + 1}}.{{ article.name }}</router-link></h2>
        <p>{{article.date}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import news from '../../public/dist/articles.json'

export default {
  name: "News",
  data() {
    return {
      news : news,
    }
  }
}
</script>

<style scoped>

</style>