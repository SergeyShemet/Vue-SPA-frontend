<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Заголовок: </strong> {{ post.title }}</div>
            <div><strong>Описание: </strong> {{ post.body }}</div>
        </div>
        <div class="post_btns">
            <my-button
            @click="$router.push(`/posts/${post.id}`)"
            style="margin: 0 10px;"
            >Открыть</my-button>
            <my-button
            @click="$emit('remove', post)"
            >Удалить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },

}
</script>
<style scoped>
.post {
    padding: 15px;
    background: #273250;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post_btns {
    display: flex;
    flex-direction: horizontal;
}
</style>