<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid container">
        <a class="navbar-brand">Slekov</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">Новости</router-link>
            </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/gallery">Галерея</router-link>
              </li>

              <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Поиск</button>
              </form>
          </ul>
        </div>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>