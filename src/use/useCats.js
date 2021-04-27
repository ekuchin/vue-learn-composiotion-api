import {reactive, computed, toRefs } from 'vue'

export default function useCats(){
    const cats = reactive({
    total:14,
    liked:0,
    remained: computed(()=>{
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