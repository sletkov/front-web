<template>
  <div class="container">

    <router-link :to="{path: '/news'}">Вернуться к новостям</router-link>
    <h1>{{ article.name }}</h1>
      <v-img :src="article.full_image" alt="lek"></v-img>
    <p>{{article.desc}}</p>
    <p>{{article.date}}</p>


      <div>
          <h2>Комментарии</h2>
          <a href="#feedback-form">Оставить комментарий</a>
          <v-card class="pl-3 pt-3 pb-2 mt-3" v-for="(comment, index) in comments" :key="index">
              <h3>{{ comment.author }}</h3>
              <p>{{ comment.text }}</p>
          </v-card>

      </div>

      <h3>Оставьте свой комментарий</h3>
      <form id="feedback-form">
          <div class="mb-3">
              <label for="name" class="form-label">Имя</label>
              <input type="text" class="form-control" id="name" placeholder="Введите Имя" v-model="commentAuthor">
          </div>
          <div class="mb-3">
              <label for="comment" class="form-label">Текст</label>
              <textarea class="form-control" id="comment" rows="3" v-model="commentText">Оставьте свой комментарий</textarea>
          </div>

          <button type="button" class="btn btn-primary align-center" @click="addComment(commentAuthor,commentText)">Отправить</button>
      </form>



  </div>
</template>

<script>


import news from '../../public/articles.json'

function Comment(author, text) {
    this.author = author;
    this.text = text;
}

export default {
  name: "NewsDetail",
  data() {
    return {
        news: news,
        article: news.find(article => article.id == this.$route.params.id),
        commentAuthor: '',
        commentText: '',

        comments: [],
    }
  },
    methods: {

      addComment(commentAuthor, commentText) {
          let comment = new Comment(commentAuthor, commentText);
          this.comments.push(comment)
      }
    }
}
</script>

<style scoped>

</style>