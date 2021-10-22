<template>
  <div id="app">
    <search-component/>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent";

export default {
  name: 'App',
  components: {
    'search-component': SearchComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
