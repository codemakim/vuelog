<template>
    <div class="board-view w3-card">
        <header class="w3-container">
            <h3>헤더</h3>
            <span class="post-count">
                <i class="far fa-eye"></i> 30
            </span>
            <span class="post-count">
                <i class="far fa-heart"></i> 30
            </span>
            <span class="post-count">
                <i class="far fa-comment"></i> 30
            </span>
        </header>
        <article class="w3-container">
            <section class="post-content">
                <span v-for="n in 100" v-bind:key="n">
                    본문입니다. 본문 본문 이라고 합 니 다.
                </span>
            </section>
            <section class="post-tag">#본문</section>
        </article>
        <footer class="w3-container">
            <hr class="line-btw-content-comment">
            <div class="w3-container w3-margin">
                <textarea class="w3-input w3-border comment-textarea" placeholder="내용을 입력하세요."></textarea>
                <button type="button" class="w3-button w3-right w3-white w3-border w3-block post-comment-submit">등록</button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div.board-view {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    span.post-count {
        padding-right: 30px;
    }
    section.post-content {
        padding: 30px 20px 30px 20px;
    }
    section.post-tag {
        padding: 30px 20px 0 20px;
    }
    line-btw-content-comment {
        border: 0.5px dashed silver;
    }
    .post-comment-submit {
        margin-top: 10px;
    }
    .comment-textarea {
        resize: vertical;
    }
</style>
