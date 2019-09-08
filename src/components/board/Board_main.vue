<template>
  <div>
    <div class="w3-row-padding">
      <div v-for="n in 3" v-bind:key="n" class="w3-col m12 l6">
        <div class="w3-card w3-padding board-main-item">
          <router-link to="/board" tag="h4">게시판 제목 {{n}}</router-link>
          <ol>
            <li v-for="n in 6" v-bind:key="n">탑게시물입니다.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .board-main-item {
    margin-bottom: 20px;
  }
</style>