<template>
  <div class="w3-card board-write w3-container">
    <input class="w3-input" type="text" name="title" id="title" placeholder="제목을 입력하세요" />
    <Editor />
    <button class="w3-button w3-border w3-border-red w3-right w3-text-red">취소</button>
    <button class="w3-button w3-border w3-right w3-margin-right">등록</button>
  </div>
</template>

<script>
import Editor from "../common/Wysiwyg_editor.vue";

export default {
  components: {
    Editor
  }
};
</script>

<style scoped>
div.board-write {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 30px;
}
div.board-write input[name="title"] {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>