<template>
    <div>
       <h1>Страница с постами</h1>
       <my-input 
       v-focus
       v-model="searchQuery"
       placeholder="Поиск..."
       />
       <div class="app_btns">
            <MyButton
            @click="showDialog"
        >Создать пост</MyButton>
        
        <MySelect
          v-model="selectedSort"
          :options="sortOptions"
        />
       </div>
       <PostList
         :posts="sorteandsearchedPosts"
         @remove="removePost"
         v-if="!isPostsLoading"
       />
       <div v-else>Загрузка...</div>
       <div v-intersection="loadMorePosts" class="observer"></div>
       <my-dialog v-model:show="dialogVisible">
        <PostForm @create="createPost"/> 
       </my-dialog>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';

export default {
    components: { PostForm, PostList },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            searchQuery: '',
            selectedSort: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                { value: "id", name: "По ID"},
                { value: "title", name: "По названию"},
                { value: "body", name: "По описанию"}
            ],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        changePage(pageNum) {
            this.page = pageNum;
        },
    
        async fetchPosts() {
            try {
                this.isPostsLoading = true;                
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) ;
                    this.posts = response.data;
            } catch (e) {
                console.log("Error: " + e.message)
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            this.page += 1;
            try {
                         
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit 
                    }
                });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) ;
                    this.posts = [...this.posts, ...response.data];
            } catch (e) {
                console.log("Error: " + e.message)
            } 
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
                if (Number.isInteger(post1[this.selectedSort])) {
                    return post1[this.selectedSort] - post2[this.selectedSort];
                } else {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
                }
            })
        },
        sorteandsearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
    }

}
</script>

<style>
.app_btns {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.page_wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
    margin: 0 5px;
}

.current_page {
    background-color: aquamarine;
}

.observer {
    height: 30px;
}
</style>