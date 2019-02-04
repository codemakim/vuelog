<template>
    <div>
        <div v-for="n in 8" v-bind:key="n" class="w3-card w3-padding-16 w3-margin-bottom w3-row board-item">
            <input type="hidden" name="index" v-bind:data-index="n"/>
            <div class="w3-col l9">
                <header class="w3-container">
                    <span>
                        <h3>제목 {{n}}</h3>
                        yyyy.MM.dd
                    </span>
                </header>
                <div class="w3-container">본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본 50자 제한...</div>
            </div>
            <div class="w3-col l3">
                <div class="w3-container w3-margin">
                    <div class="w3-col l12 m4 s4">
                        <i class="far fa-eye"></i> 30
                    </div>
                    <div class="w3-col l12 m4 s4">
                        <i class="far fa-heart"></i> 30
                    </div>
                    <div class="w3-col l12 m4 s4">
                        <i class="far fa-comment"></i> 30
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div.board-item:hover {
        background-color: #F6F6F6;
        cursor: pointer;
    }
/*
    div.board-item.current-view {
         목록에 현재글을 표시하기 위한 스타일
    }
 */
</style>
