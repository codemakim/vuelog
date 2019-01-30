<template>
  <div id="app">
    <SideBar></SideBar>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Header,
    SideBar,
    Main
  }
}
</script>

<style>

</style>
