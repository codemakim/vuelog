<template>
    <header class="w3-bar w3-card">
        <button v-on:click="showSidebar()" class="w3-button w3-white">☰</button>
    </header>
</template>

<script>
export default {
    methods: {
        showSidebar() {
            document.querySelector('nav.w3-sidebar').style.display = 'block';
        }
    }
}
</script>

<style scoped>

</style>
