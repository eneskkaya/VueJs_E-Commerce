<template>
<div class="filtreleme clearfix">
         <img src="src/assets/lensReklam.jpg" alt="">
    <p> <strong>Johnson & Johnson</strong> markasının tüm <strong>Acuvue lenslerini</strong> , lens çeşitlerini ve lens fiyatlarını Türkiye’nin ilk ve en büyük online lens markası olan <a href="https://www.lensmarket.com">www.lensmarket.com</a> ‘da J&J lens marka kategorisinde bulabilirsiniz.
        <strong>Acuvue OASYS 1-Day</strong> 30 lu kutu silikon hidrojel günlük lens, <strong>Acuvue oasys günlük lens</strong> en son çıkan en yeni günlük lenstir.UV korumalı günlük lenslerdir. <strong>Acuvue oasys lens</strong> iki haftalık 15 günlük lens ve lens fiyatları, Acuvue oasys lens uv korumalıdır.Acuvue true eye günlüklens UV ışınlarına karşı koruma sağlar., Acuvue oasys silikon hidrojel astigmatlı lens uv blokajlı lens. Acuvue moist günlük lens , Acuvue moist astigmatlı günlük lens uv ışınlarından korur, Acuvue define sparkle göz rengini değiştirmeden gözdeki doğal hareleri belirginleştirerek gözlere pırıltı ve canlılık veren günlük lens , Acuvue define shimmer gözlere ışıltı veren günlük kullan-at
    </p>
    <div class="filtreDropdown">
        <select class="dropdownFiltre">
            <option value="1">Alfabetik</option>
            <option value="2">Fiyata Göre Azalan</option>
            <option value="3">Fiyata Göre Artan</option>
            <option value="4">İzlenme Sayısına Göre</option>
        </select>
        <p> <span>Johnson & Johnson</span> markasında <span>28</span> adet ürün bulunmuştur.</p>
    </div>
   </div>
    
</template>
<script>
export default {
}
</script>
<style scoped>
.filtreleme{
    display: inline-block;
    width:77%;
    margin: 0 auto;
    background: #eeeeee;
    padding: 12px 16px;
    height: 330px;
}

p{
    font-size: 12px;
    color: #444;
    line-height: 1.5;
}
.filtreleme a{
    color: orange;
}
.dropdownFiltre{
    min-width: 150px;
    max-width:170px;
    float:left;
    height:37px;
    border: 1px solid orangered;
}
.filtreDropdown p {
    float: right;
    font-size: 14px;
}
.filtreDropdown p span{
    color: orangered;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>