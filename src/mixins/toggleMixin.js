export default {
    props: {
        show : false
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false);
        }
    },
    mounted() {
        
    },
}