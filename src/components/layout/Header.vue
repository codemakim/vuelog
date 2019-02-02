<template>
    <header class="w3-bar w3-border-bottom header">
        <button v-on:click="showSidebar()" class="w3-button w3-white">☰</button>
        <div class="w3-bar-item w3-button w3-right w3-large">
            <i class="fas fa-user-circle"></i>
        </div>
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
