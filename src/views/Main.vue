<template>
  <div class="main container">
      <h1>Главная</h1>
      <p>Добро пожаловать на страницу новостей!</p>
      <slider/>
  </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
    name: "Main",
    components: {
      Slider
    }
}
</script>

<style scoped>

</style>