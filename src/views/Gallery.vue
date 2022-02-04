<template>
    <div class="container">
        <h1>Галерея</h1>
        <v-card v-for="(article, index) in  articles" :key="index" class="mt-5">
            <v-card-text class="text-h2">{{ article.name }}</v-card-text>
            <v-img :src="article.full_image"/>
        </v-card>
    </div>
</template>

<script>
import articles from '../../public/articles.json'

export default {
    name: "Gallery",
    data() {
        return {
            articles: articles,
        }
    }
}
</script>

<style scoped>

</style>