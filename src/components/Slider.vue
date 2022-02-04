<template>
    <v-carousel v-model="model">
        <v-carousel-item v-for="(article, index) in getSliderArticles" :key="index">
            <v-img :src="article.full_image">
                <p class="text-h2 align-center">{{ article.name }}</p>
            </v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import articles from '../../public/articles.json'

export default {
    name: "Slider",
    data() {
        return {
            model: 0,
            articles: articles,
        }
    },
    computed: {
        getSliderArticles() {
            return this.articles.filter((article) => article.slider)
        }
    }
}
</script>

<style scoped>

</style>