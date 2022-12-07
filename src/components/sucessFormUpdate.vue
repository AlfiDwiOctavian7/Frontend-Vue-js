<template>
    <div class="card-body border-color-pink" style="width: 100px;">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Your Data Has Been Update!</p>
        <router-link to="/" class="btn bg-color-pink text-dark">Back</router-link>
    </div>
</template>

<script>
export default {
    name: "sucessUpdate"
}
</script>

<style scoped>
    .border-color-pink{
        border: solid 2px #F9CADA;
    }
    .bg-color-pink{
        background-color: #F9CADA;
    }
</style>