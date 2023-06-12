<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "MyButton"
}
</script>
<style scoped>
.btn {    
    padding: 10px 15px;
    background: none;
    background-color: #00497a;
    color: #fff;
    border-radius: 5px;
}
</style>