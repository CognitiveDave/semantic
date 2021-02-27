<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Semantic Vue.js App"/>
    <textH msg="Welcome to text highlight. The next paragraph is our new feature.."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import textH from './components/text.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    textH
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
  margin-top: 60px;
}
</style>
