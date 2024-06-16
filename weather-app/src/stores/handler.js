import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRoute } from 'vue-router';


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
          const result = await axios.get(`https://api.mapbox.com/search/geocode/v6/forward?q=${query}&access_token=${mapboxApiKey}&types=place`);
          mapboxSearchResults.value = result.data.features;
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


export const weatherControl = defineStore('weatherData', () => {
  const route = useRoute()
  const getWeatherData = async () => {
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`
      );
  
      // cal current date & time
      const localOffset = new Date().getTimezoneOffset() * 60000;
      const utc = weatherData.data.current.dt * 1000 + localOffset;
      weatherData.data.currentTime =
        utc + (1000 * weatherData.data.timezone_offset);
  
      // cal hourly weather offset
      weatherData.data.hourly.forEach((hour) => {
        const utc = hour.dt * 1000 + localOffset;
        hour.currentTime =
          utc + 1000 * weatherData.data.timezone_offset;
      });
      console.log(weatherData.data)
      console.log(utc)
      console.log(localOffset)
      return weatherData.data;
    } catch (err) {
      console.log(err);
    }
  };


  return { getWeatherData }
})