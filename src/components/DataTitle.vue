<template>
  <div class="text-center rounded-full py-3 px-6 bg-gray-100">
      <h2 class="text-3xl font-bold">{{text}}</h2>
      <div class="text-2xl mt-4 mb-10 text-black">
         {{timestamp}} 
      </div>
  </div>
</template>

<script>
import moment from "moment"
export default {
    name:'DataTitle',
    props:['text','dataDate'],
    computed:{
      timestamp: function() {
          return moment(this.dataDate).format('Do MMMM YYYY, h:mm:ss a')
      }  
    }
}
</script>

<style>

</style>