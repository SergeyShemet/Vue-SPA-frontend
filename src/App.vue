<template>
     <NavBar></NavBar>
    <div class="app">
        <RouterView></RouterView>
    </div>
</template>


<script>
import NavBar from './components/UI/NavBar.vue';
export default {
    components: { NavBar }
}
</script>
<style>
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    color: white;
}
#app {
    
    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;
    background: #0b010b; 
    
}

.app {
    
    background: #0b010b; 
    padding: 20px;
    width: 1000px;

}
</style>