<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getResult" placeholder="Masukkan daerah yang akang dicari"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
      <ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="search.mapboxSearchResults && searchQuery">
        <p class="py-2" v-if="search.searchError">
          Sorry, something went wrong, please try again.
        </p>
        <p class="py-2" v-if="!search.searchError && search.mapboxSearchResults.length === 0">
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li v-for="searchResult in search.mapboxSearchResults" :key="searchResult.id"
            class="py-2 cursor-pointer text-white" @click="previewCity(searchResult)">
            {{ searchResult.properties.full_address }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { mapSearch } from '../stores/handler.js';

const previewCity = (searchResult) => {
  console.log(searchResult)
}



const searchQuery = ref("")
const search = mapSearch()

const getResult = () => {
  if (searchQuery.value != "") {
    search.getSearchResults(searchQuery.value)
  }

}
</script>
