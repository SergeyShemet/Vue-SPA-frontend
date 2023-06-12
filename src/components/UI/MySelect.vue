<template >
    <select :value="modelValue" @change="changeOption" class="sel">
        <option disabled value="">Сортировка...</option>
        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
        >
        {{ opt.name }}
    </option>
    </select>
</template>
<script>
export default {
    name: 'MySelect',
    props: {
        modelValue: String, 
    
        options: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style>
.sel {
    background-color: #0b4f6c;
}
</style>