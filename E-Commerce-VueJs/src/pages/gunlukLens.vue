<template>
<div>
    <ust-menu></ust-menu>
    <side-bar></side-bar>
    <urunler></urunler>
    <filtreleme></filtreleme>
    
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

</style>