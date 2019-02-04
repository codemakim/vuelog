<template>
    <div class="w3-container">
        <h2>게시판 제목</h2>
        <BoardView></BoardView>
        <List></List>
        <pagination></pagination>
    </div>
</template>

<script>
import List from './Board_list.vue'
import BoardView from './Board_view.vue'
import Pagination from './Board_pagination.vue'
export default {
    components: {
        List,
        BoardView,
        Pagination
    }
}
</script>

<style scoped>
    .board-item:hover {
        background-color: #F6F6F6;
        cursor: pointer;
    }
</style>