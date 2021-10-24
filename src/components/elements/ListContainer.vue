<template>
    <ul class="search-list__container">
        <li v-for="(person, idx) in personsArray" :key="idx"
            class="list__card"
        >
            <p class="list__card--title">{{person}}</p>
            <button
                @click="addPerson(person)"
                class="list__card--button">Добавить</button>
         </li>
    </ul>
</template>

<script>
    export default {
        name: 'list-container',

        props: {
            personsArray: {
                type: Array,
                required: true
            }
        },

        methods: {
            addPerson(person) {
                this.$emit('addPerson',person )
            }
        }
    }
</script>

<style scoped>
    .list__card {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 9px 27px;
        margin-bottom: 2px;
        width: 75%;
    }
    .list__card--button {
        border: none;
        background-color: #40B159;
        cursor: pointer;
        padding: 2px 18px;
        font-size: 12px;
    }
    .list__card--button:hover {
        background-color: #1a8231;
    }
    .list__card--button:active {
        background-color: #0b501a;
    }
    .list__card--title {
        font-size: 12px;
    }
</style>
