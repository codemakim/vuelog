<template>
  <div class="w3-container">
    <h2>게시판 제목</h2>
    <!-- 이 아래 컴포넌트들이 라우터 뷰 영역 내에서 선택되어 나타날 것입니다. -->
    <router-view></router-view>
    <!-- 
    <Main></Main>
    <Detail></Detail>
    <Write></Write>
    <List></List>
    <pagination></pagination>
     -->
  </div>
</template>

<script>
// import Main from "./Board_main.vue";
// import List from "./Board_list.vue";
// import Detail from "./Board_view.vue";
// import Write from "./Board_write.vue";
// import Pagination from "./Board_pagination.vue";
export default {
  // components: {
  //   Main,
  //   List,
  //   Detail,
  //   Write,
  //   Pagination
  // }
};
</script>

<style>
.board-item:hover {
  background-color: #f6f6f6;
  cursor: pointer;
}
section.post-tag span:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>