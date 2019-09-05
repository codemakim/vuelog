<template>
    <div class="w3-container">
        <h2>게시판 제목</h2>
        <BoardView></BoardView>
        <boardWrite></boardWrite>
        <List></List>
        <pagination></pagination>
    </div>
</template>

<script>
import List from './Board_list.vue'
import BoardView from './Board_view.vue'
import BoardWrite from './Board_write.vue'
import Pagination from './Board_pagination.vue'
export default {
    components: {
        List,
        BoardView,
        BoardWrite,
        Pagination
    }
}
</script>

<style>
    .board-item:hover {
        background-color: #F6F6F6;
        cursor: pointer;
    }
    section.post-tag span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>