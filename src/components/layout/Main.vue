<template>
  <div class="w3-main w3-bar-block" style="margin-left: 320px;">
    <div class="w3-margin">
      <div class="w3-row">
        <article class="w3-col l9 w3-container">
          하하 이것보아라
          <router-view></router-view>
          <!-- <Board></Board> -->
        </article>
        <div class="w3-col l3 w3-container">
          <div class="w3-card w3-center" style="height: 400px;">광고</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Board from "../board/Board.vue";

export default {
  components: {
    //Board
  }
};
</script>

<style>
div.w3-main {
  height: 1000px;
  margin-left: 330px;
}
</style>
