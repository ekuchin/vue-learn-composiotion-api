<template>
  <div class="hello">
    <h3>Количество котов: {{ catsTotal }}</h3>
    <h3>Поглажено котов: {{ catsLiked }}</h3>
    <br/>
    <button @click="likeCat()">Погладь кота, ...</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup(){
    const catsTotal = ref(14);
    const catsLiked = ref(0);

    function likeCat(){
      catsLiked.value++
    }

    return { catsTotal, catsLiked, likeCat }
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
