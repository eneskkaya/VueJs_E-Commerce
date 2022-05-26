<template>
<div>
   <ust-menu></ust-menu>
    <div class="alitrick">
        <ali></ali>
       
    <carousel>
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
   <sideBar></sideBar>

   
   <urunler></urunler>
   <markalar></markalar>
    </div>
    
   </div>
 
</template>
<script>
import ustMenu from '../components/ustMenu.vue'
import sideBar from '../components/sideBar2.vue'
import urunler from '../components/urunler.vue'
import markalar from '../components/markalar.vue'
import carousel from '../components/Carousel.vue'
import carouselSlide from '../components/CarouselSlide.vue'
import ali from '../components/ali.vue'
import db from '../../db/db.json'
    export default{
        data(){
        return {
            slides: db.slides,
            custom : "ali",
            urunlerim: []
        }
    },
        components:{
            ustMenu,
            sideBar,
            urunler,
            markalar,
            carousel,
            carouselSlide,
            ali
        },
        created() {
            this.$store.dispatch("getSliders").then((response) =>{
               this.slides = this.$store.state.product.data;
               console.log(this.$store.state.data);
            } );
            this.$store.dispatch("getUrunler").then((response) =>{
               this.urunlerim = this.$store.state.product.urunler;
               console.log(this.$store.state.urunler);
            } );
        }
}
</script>

<style scoped>
.alitrick{
    width: 80%;
    margin: 0 auto;
}

</style>