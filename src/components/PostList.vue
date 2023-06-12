<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <TransitionGroup name="post-list">
            <PostItem
          class="post"
          v-for="item in posts"
          :key="item.id"
          :post="item"
          @remove="$emit('remove', item)"
        />
        </TransitionGroup>
    </div>
    <h2 v-else style="color: red;">
        Список постов пуст
    </h2>

</template>
<script>
//import { emit } from 'process';
import PostItem from './PostItem.vue';

export default {
    props: {
        posts: {
            type: Array,
            required: true
        },
    },
    components: { PostItem }
}
</script>
<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.2s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.post-list-move {
  transition: transform 0.3s ease;
}
</style>