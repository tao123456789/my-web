<template>
  <div id="app">
<!--    <ruoter-view></ruoter-view>-->
    <index id="index"/>
  </div>
</template>

<script>
import index from "./components/index/index";

export default {
  name: 'App',
  components: {
    'index':index},
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
