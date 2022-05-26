<template>
<div>
    <ust-menu></ust-menu> 
    <urun-detay/>
</div>
</template>

<script>
import UrunDetay from '../components/urunDetay.vue'
import ustMenu from "../components/ustMenu.vue"


export default {
  components : {
    ustMenu,
    UrunDetay
    
    }
}
</script>
<style scoped>

</style>