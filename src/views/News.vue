<template>
  <div class="container">
    <h1>Новости</h1>
      <v-row>
          <v-col v-for="(article, index) in news" :key="index" md="4">
              <v-card>
                  <v-img height="250" :src="article.preview_image"></v-img>
                  <v-card-title><router-link :to="{path: `news/${article.id}`}">{{index + 1}}.{{ article.name }}</router-link></v-card-title>
                  <v-card-text>
                      <p>{{ article.description }}</p>
                      <p>{{article.shortDesc}}</p>
                      <p>{{article.date}}</p>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import news from '../../public/articles.json'

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