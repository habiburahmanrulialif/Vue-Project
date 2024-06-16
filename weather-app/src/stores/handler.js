import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { errorMessages } from 'vue/compiler-sfc';

export const handlerStore = defineStore('handler', () => {
  const modalActive = ref(false)

  function modalhandler() {
    modalActive.value = !modalActive.value;
  }
  return { modalActive, modalhandler }
});


export const mapSearch = defineStore('map', () => {
  const queryTimeout = ref(null);
  const mapboxApiKey = "pk.eyJ1IjoidGVyaXR1bCIsImEiOiJjbHhnNmVqZmExMGpnMm1vYXd1ZmcyaGtyIn0.tQX38PvSa9JF9PwJvPfTYA";
  const mapboxSearchResults = ref(null)
  const searchError = ref(null)


  const getSearchResults = (query) => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async() => {
      if (query !== '') {
        try {
          const result = await axios.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${query}&access_token=${mapboxApiKey}`);
          mapboxSearchResults.value = result.data.features;
          console.log(mapboxSearchResults.value)
        }
        catch
        {
          searchError.value = true
        }
        return;
      };
      mapboxSearchResults.value = null;
    }, 300)
  }

  return { mapboxSearchResults, searchError, getSearchResults }
})
