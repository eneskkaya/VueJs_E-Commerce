<template>
    <div class="container clearfix">
        <ul>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="globe"></FontAwesomeIcon></span>Markalar</a>
                <ul>
                    <li><a href="">Johnson & Johnson</a></li>
                    <li><a href="">Bausch + Lomb</a></li>
                    <li><a href="">Alcon (Ciba Vision)</a></li>
                    <li><a href="">Cooper Vision</a></li>
                    <li><a href="">Sauflon</a></li>
                    <li><a href="">Tech Contactlens</a></li>
                    <li><a href="">Swiss Lens</a></li>
                    <li><a href="">Zeiss (Wöhlk)</a></li>
                </ul>
            </li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="circle-notch"></FontAwesomeIcon></span>Lens Tipleri</a>
                <ul>
                    <li><a href="">Saydam Lens</a></li>
                    <li><a href="">Renkli Lens</a></li>
                    <li><a href="">Toric(Astigmat) Lens</a></li>
                    <li><a href="">Multifocal(Uzak-Yakın) Lens</a></li>
                    <li><a href="">Özel Lens</a></li>
                    <li><a href="">İndirimli Lens Setleri</a></li>
                    <li><a href="">Lens Solüsyonu</a></li>
                </ul>
            </li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="clock"></FontAwesomeIcon></span>Değişim Sıklığı</a>
                <ul>
                    <li><a href="">Günlük Kullan-At Lensler</a></li>
                    <li><a href="">2 Haftalık Lensler</a></li>
                    <li><a href="">Aylık Lensler</a></li>
                </ul>
            </li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="eye"></FontAwesomeIcon></span>Göz Bakım Ürünleri</a></li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="percent"></FontAwesomeIcon></span>İndirimli Lens Setleri</a></li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>Özel Set</a></li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="tint"></FontAwesomeIcon></span>Solüsyonlar</a></li>
            <li class="kategori"><a href=""><span><FontAwesomeIcon icon="tag"></FontAwesomeIcon></span>Kampanyalar</a></li>
            
        </ul>
        
    </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fas);
    export default{
        components : {
            FontAwesomeIcon
        }
    }
</script>

<style scoped>
.container{
    float: left;
    margin-top:25px;
    width:20%;
    margin: 0 auto;
    height: auto;
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    border-top-left-radius: 5px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.container ul{
    list-style: none;
}
.kategori{
    color: orangered;
    font-size: 16px;
    margin-top:20px;
    font-weight: bold;
    list-style-type: none;
}
.kategori a{
    color: orangered;
    text-decoration: none;
}
.kategori span{
    margin-left: -30px;
}
.kategori a:hover{
    color: rgb(156, 94, 36);
  
}
.kategori ul li{
    color: black;
    font-size: 15px;
    margin-top: 5px;
    font-weight: 100;
    list-style-type: disc;
    margin-left: -40px
}
.kategori ul li:first-child{
    margin-top: 20px;
}
.kategori ul li a{
    text-decoration: none;
    color: black;
}
.kategori ul li a:hover{
    text-decoration: none;
    color: #332ffd;
}
</style>