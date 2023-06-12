<template>
    <div class="navbar">
         <div><h4>Демо-приложение Vue</h4></div>
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
.navbar {
    width: 100%;
    display: flex;
    background: #202c5e; 
    box-shadow: 2px 2px 4px rgb(0, 0, 0);
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    
    
}

.navbar_btns {
    margin: 10px;
    margin-left: auto;
}
</style>