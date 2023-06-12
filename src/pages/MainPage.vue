<template>
    <div style="display: flex; align-items: center;">
        <h1>Добро пожаловать!</h1>
        <div class="navbar_btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 15px;">О сайте</my-button>
            <my-button @click="$router.push('/capi')" style="margin-left: 15px;">Composition API</my-button>
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>