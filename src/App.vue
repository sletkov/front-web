<template>
    <div id="app">
        <Header/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
import Header from "../src/components/Header";

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

