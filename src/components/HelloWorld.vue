<template>
  <div class="hello">
    <h3>Количество котов: {{ total }}</h3>
    <h3>Поглажено котов: {{ liked }}</h3>
    <h3>Осталось погладить: {{ remainded }}</h3>
    <br/>
    <button @click="likeCat()">Погладь кота, ...</button>
  </div>
</template>

<script>
import {reactive, computed, toRefs } from 'vue'

export default {
  setup(){
    
    const cats = reactive({
      total:14,
      liked:0,
      remainded: computed(()=>{
        return cats.total - cats.liked
      })
    })

    function likeCat(){
      if (cats.liked<cats.total){
        cats.liked++
      }
    }

    return { ...toRefs(cats), likeCat }
  }
};
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
