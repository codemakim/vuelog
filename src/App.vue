<template>
  <div id="app">
    <SideBar></SideBar>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import SideBar from './components/layout/SideBar.vue'
import Main from './components/layout/Main.vue'

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
