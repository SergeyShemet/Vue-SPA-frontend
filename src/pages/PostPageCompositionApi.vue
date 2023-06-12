<template>
    <div>
       <h1>Страница с постами с применением Composition API</h1>
       <my-input 
       v-focus
       v-model="searchQuery"
       placeholder="Поиск..."
       />
       <div class="app_btns">
        <MySelect
          v-model="selectedSort"
          :options="sortOptions"
        />
       </div>
       <PostList
         :posts="sorteandsearchedPosts"
         v-if="!isPostsLoading"
       />
       <div v-else>Загрузка...</div>
       <my-dialog v-model:show="dialogVisible">
        <PostForm /> 
       </my-dialog>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
    components: { PostForm, PostList },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                { value: "id", name: "По ID"},
                { value: "title", name: "По названию"},
                { value: "body", name: "По описанию"}
            ],
        }
    },
    setup() {
      const { posts, isPostsLoading, totalPages } = usePosts(10);
      const { sortedPosts, selectedSort } = useSortedPosts(posts);
      const { searchQuery, sorteandsearchedPosts } = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts, isPostsLoading, totalPages,
            sortedPosts, selectedSort,
            searchQuery, sorteandsearchedPosts
        }
    }
}
</script>

<style>
</style>