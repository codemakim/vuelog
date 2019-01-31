<template>
    <nav class="w3-sidebar w3-bar-block w3-collapse w3-card">
        <button v-on:click="closeSidebar()" class="w3-hide-large w3-button w3-block">Close(X)</button>
        SideBar
    </nav>
</template>

<script>
export default {
    methods: {
        closeSidebar() {
            document.querySelector('nav.w3-sidebar').style.display = 'none';
        }
    }
}
</script>

<style scoped>
    nav.w3-sidebar {
        width: 25%;
        width: 320px;
    }
</style>
