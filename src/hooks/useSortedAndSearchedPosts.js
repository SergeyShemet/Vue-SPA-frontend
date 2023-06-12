import { computed, ref } from "vue";

export default function useSortedAndSearchedPosts(sortedPosts) {
    const searchQuery = ref('')
    const sorteandsearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))

    
})
    return {
        searchQuery, sorteandsearchedPosts
    }
} 