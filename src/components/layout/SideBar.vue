<template>
  <nav class="w3-sidebar w3-bar-block w3-collapse w3-card">
    <button v-on:click="closeSidebar()" class="w3-hide-large w3-button w3-block">Close(X)</button>
    <div
      class="w3-hide-medium w3-hide-small w3-center w3-xlarge w3-logofont w3-padding-16"
    >&lt;VueLog/&gt;</div>
    <ul>
      <li v-for="n in 10" v-bind:key="n">메뉴{{n}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    closeSidebar() {
      document.querySelector("nav.w3-sidebar").style.display = "none";
    }
  }
};
</script>

<style scoped>
nav.w3-sidebar {
  width: 320px;
}
.w3-logofont {
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
