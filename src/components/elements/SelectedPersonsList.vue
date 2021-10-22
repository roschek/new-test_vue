<template>
    <div class="selected-persons">
        <div class="title__wrapper">
            <h2 class="title">Список добавленных элементов</h2>
        </div>
        <ul class="selected-list">
            <li v-for="person in selectedPersons"
                :key="person"
                class="selected__list-item">
                <p>{{person}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'selected-persons-list',
        props: {
            selectedPersons: {
                type: Array,
                required:true
            }
        }

    }
</script>

<style scoped>
    .selected-persons {
        display: flex;
        flex-direction: column;
        align-items: start;

    }
    .title__wrapper {
        width: 100%;
        background-color: #C4C4C4;
    }
    .title {
        font-size: 12px;
    }
    .selected-list{
        padding-left: 0;
        margin: 0;
        width: 100%;
        list-style: none;
        background-color: #C4C4C4;
    }
    .selected__list-item{
        margin-top: 2px;
        background-color: white;
        padding-left: 15px;
        text-align: start;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .selected__list-item p {
        font-size: 12px;
    }
</style>
