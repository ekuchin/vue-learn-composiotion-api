<template>
  <div class="hello">
    <h3>Количество котов: {{ total }}</h3>
    <h3>Поглажено котов: {{ liked }}</h3>
    <h3>Осталось погладить: {{ remained }}</h3>
    <br/>
    <button @click="likeCat()">Погладь кота, ...</button>
  <br/>
    
    Поиск: <input v-model="searchInput"/>
    <button @click="callAPI('a')">Запрос к api</button>
    {{results}}
  </div>
</template>

<script>
import {ref, watchEffect, watch} from 'vue'
import useCats from '@/use/useCats'
//import getValueFromAPI from "@/api/cats"

export default {
  setup(){    
    const {total, liked, remained, likeCat} = useCats()

    const searchInput = ref("");
    const results = ref(0)

    const callAPI = (val) =>{
      setTimeout(() =>{
        const i=Math.random()
        console.log(i)
        results.value = val.length+Math.round((i*10))
      }, 500)
    }

    watchEffect(() => {
      results.value = callAPI(searchInput.value);
    });

    watch(searchInput, (newValue, oldValue)=>{
        console.log("watch", newValue, oldValue)

    })

    return {total, liked, remained, likeCat, callAPI, results, searchInput}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
