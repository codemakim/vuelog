<template>
    <div id="app">
        <div class="w3-container">
            <h2>게시판 제목</h2>
            <List></List>
            <pagination></pagination>
        </div>
    </div>
</template>

<script>
import List from './Board_list.vue'
import Pagination from './Board_pagination.vue'
export default {
    components: {
        List,
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