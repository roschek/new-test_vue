<template>
    <section class="search-component__container">
        <input type="text"
            v-model="searchField"
            placeholder="Введите имя"
            class="search-component__input"
            @input="takeData"
        >
        <list-container
            class="search-list__container"
            :personsArray="personsArray"
            @addPerson="addPerson"
        />
        <button
            class="search__button"
            @click="handlerAutoSearch"
        >
            <span v-if="startAutoSearch">Остановить автопоиск</span>
            <span v-else>Включить автопоиск</span>
        </button>
        <selected-persons-list
            v-if="selectedPersons.length"
            :selectedPersons="selectedPersons"
        />
    </section>
</template>

<script>
    import { fetchData } from  '../api/api.js'
    import ListContainer from "./elements/ListContainer"
    import SelectedPersonsList from "./elements/SelectedPersonsList"

    export default {
        name: 'search-component',
        components: {
            'list-container': ListContainer,
            'selected-persons-list': SelectedPersonsList
        },

        data() {
            return {
                searchField: '',
                personsArray: [],
                startAutoSearch: true,
                selectedPersons: []
            }
        },

        methods: {

            async takeData() {
                const query = this.searchField

                if ( this.searchField.length > 2 && this.startAutoSearch ) {
                    this.personsArray = []
                    const personsData = await fetchData( query )
                    personsData.suggestions.forEach( element => this.personsArray.push( element.value ) )
                }
            },

            addPerson( person ) {
                this.selectedPersons.push( person )
            },

            handlerAutoSearch() {
                this.startAutoSearch =  !this.startAutoSearch
            }
        }
    }
</script>

<style scoped>
    .search-component__container {
        display: flex;
        flex-direction: column;
        max-width: 279px;
        border: solid 1px #E5E5E5;
        margin: 200px auto;
    }

    .search-component__input {
        padding: 14px 0 14px 16px;
        border: none;
    }

    .search-list__container {
        margin: 0;
        min-height: 266px;
        max-height: 266px;
        border: none;
        overflow-y: scroll;
        padding-top: 24px;
        padding-left: 2px;
        padding-right: 13px;
        background-color: #C4C4C4;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .search__button {
        background-color: #7382CD;
        padding-top: 15px;
        padding-bottom: 15px;
        cursor: pointer;
        border: none;
    }
    .search__button:hover {
        background-color: #30577f;
    }
    .search__button:active {
        background-color: #2c3e50;
    }
    .search__button span {
        display: inline-block;
        max-width: 100px;
    }

</style>
