<template>
<div>
    <ust-menu></ust-menu>
    <div class="alitrick">
      <div class="clearfix">
   <side-bar></side-bar>
    <filtreleme></filtreleme>
    
    <urunler></urunler>
      </div>

    </div>
 
</div>

</template>
<script>
import ustMenu from "../components/ustMenu.vue"
import filtreleme from "../components/filtreleme.vue"
import urunler from "../components/urunler.vue"
import sideBar from "../components/sideBar2.vue"




export default {
  components : {
    ustMenu ,
    sideBar,
    filtreleme,
    urunler
    }
}
</script>
<style scoped>
.alitrick{
    width: 80%;
    margin: 0 auto;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>