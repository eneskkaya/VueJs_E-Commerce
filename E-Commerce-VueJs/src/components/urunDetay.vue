<template>
  <div class="urunDetay clearfix" v-if="product">
    <div class="urunResimDiv">
      <img :src="product.image" alt="" />
    </div>
    <div class="urunBody">
      <div class="clearfix">
        <div class="urunBodySol">
          <h1>{{ product.urunAdi }}</h1>
          <div class="ratingYorum">
            <span><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
            <span><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
            <span><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
            <span><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
            <a class="yorumlar" href="#">Yorumlar (<span>1493</span>)</a>
            <span> | </span>
            <a href="#">Yorum Yaz</a>
          </div>
          <p class="urunAciklama">
            {{ product.urunAciklama }}
          </p>
          <span class="ucretText"
            ><b>{{ Number.parseFloat(product.fiyat).toFixed(2) }} </b>TL</span
          >
          <br />
          <!--  <span class="ucretTextAciklama"
            >9 x 14,59 TL'den başlayan <b>taksitlerle</b></span
          > -->
          <br />
          <!-- <span class="stokDurumu">Stok Durumu <span>%99</span></span> -->
        </div>
        <!-- <div class="urunBodySag">
          <span>Bu ürünü</span>
          <br />
          <span>indirimli set olarak alın</span>
          <br />
          <h3><b>%21 kazançlı çıkın!</b></h3>
          <a href="#">Fırsatı Yakala</a>
        </div> -->
      </div>

      <div class="urunSecenekler">
        <div class="item">
          <img src="src/assets/kargo.svg" alt="" />
          <span>Ücretsiz Kargo</span>
        </div>
        <div class="item">
          <div class="item">
            <img src="src/assets/motor.svg" alt="" />
            <span>Aynı Gün Teslimat</span>
          </div>
        </div>
        <div class="item">
          <div class="item">
            <img src="src/assets/dunya.svg" alt="" />
            <span>2 Kutu Üzeri Solüsyon Hediye</span>
          </div>
        </div>
        <div class="item">
          <div class="item">
            <img src="src/assets/kart.svg" alt="" />
            <span>200 TL ve Üzeri Vade Farksız 4 Taksit</span>
          </div>
        </div>
        <div class="item">
          <div class="item">
            <img src="src/assets/kapida-odeme.svg" alt="" />
            <span>Kapıda Ödeme</span>
          </div>
        </div>
      </div>
      <div class="urunSecimler">
        <table>
          <thead>
            <th>Göz</th>
            <th>Dia</th>
            <th>Bc</th>
            <th>Sph(Pwr)*</th>
            <th>Adet</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>Sol</td>
              <td>
                <select class="dropdownFiltre" v-model="cart[0].dia">
                  <option value="14:00">14:00</option>
                </select>
              </td>
              <td>
                <select class="dropdownFiltre" v-model="cart[0].bc">
                  <option value="8.40">8.40</option>
                  <option value="8.80">8.80</option>
                </select>
              </td>
              <td>
                <select class="dropdownFiltre" v-model="cart[0].sph">
                  <!-- 
                  <option>Seçiniz</option> -->
                  <option value="-12.00" selected="selected">-12.00</option>
                  <option value="-10.00">-10.00</option>
                  <option value="-5.00">-5.00</option>
                  <option value="2.00">2.00</option>
                  <option value="3.00">3.00</option>
                  <option value="5.00">5.00</option>
                  <option value="7.00">7.00</option>
                  <option value="12.00">12.00</option>
                </select>
              </td>
              <td>
                <select class="dropdownFiltre" v-model="cart[0].count">
                  <!-- 
                  <option>Seçiniz</option> -->

                  <option value="0">Seçiniz</option>
                  <option value="1" selected="selected">1 Kutu</option>
                  <option value="2">2 Kutu</option>
                  <option value="3">3 Kutu</option>
                  <option value="4">4 Kutu</option>
                </select>
              </td>
              <td rowspan="2" style="width: 30%; height: 100px">
                <Button style="text-align: center" @click="addAllToCart()"
                  ><span style="color: white"
                    ><img
                      src="src/assets/sepetkirmizi.png"
                      alt="yok"
                      style="
                        width: 25px;
                        margin-top: -10px;
                        display: inline-block;
                        float: left;
                      " /></span
                  >SEPETE EKLE</Button
                >
              </td>
            </tr>
            <tr>
              <td>Sol</td>
              <td>
                <select class="dropdownFiltre" v-model="cart[1].dia">
                  <option value="14:00">14:00</option>
                </select>
              </td>
              <td>
                <select class="dropdownFiltre" v-model="cart[1].bc">
                  <option value="8.40">8.40</option>
                  <option value="8.80">8.80</option>
                </select>
              </td>
              <td>
                <select class="dropdownFiltre" v-model="cart[1].sph">
                  <!-- 
                  <option>Seçiniz</option> -->
                  <option value="-12.00" selected="selected">-12.00</option>
                  <option value="-10.00">-10.00</option>
                  <option value="-5.00">-5.00</option>
                  <option value="2.00">2.00</option>
                  <option value="3.00">3.00</option>
                  <option value="5.00">5.00</option>
                  <option value="7.00">7.00</option>
                  <option value="12.00">12.00</option>
                </select>
              </td>
              <td>
                <select class="dropdownFiltre" v-model="cart[1].count">
                  <!-- 
                  <option>Seçiniz</option> -->

                  <option value="0" selected="selected">Seçiniz</option>
                  <option value="1">1 Kutu</option>
                  <option value="2">2 Kutu</option>
                  <option value="3">3 Kutu</option>
                  <option value="4">4 Kutu</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { mapActions, mapGetters } from "vuex";
import { auth } from "../../firebase/config"
export default {
  components: {
    FontAwesomeIcon,
  },
  name: "urunDetay",
  data() {
    return {
      product: null,
      cart: [
        {
          goz: "Sol",
          dia: "14:00",
          bc: "8.40",
          sph: "-12.00",
          count: 1,
          pid: 0,
        },
        {
          goz: "Sağ",
          dia: "14:00",
          bc: "8.40",
          sph: "-12.00",
          count: 0,
          pid: 0,
        },
      ],
    };
  },
  created() {
    this.fetchProducts().then((data) => {
      this.product = data.find(
        (item) => item.id === Number(this.$route.params.id)
      );
      this.cart = this.cart.map((item, index) => {
        item.pid = this.product.id;
        return item;
      });
    });
    this.fetchCart();
  },
  computed: { ...mapGetters(["getProductWithID"]) },
  methods: {
    ...mapActions(["fetchProducts", "addToCart", "fetchCart"]),
    addAllToCart() {
       auth.onAuthStateChanged((user) => {
        if (user) {
          this.cart.forEach((element) => {
            this.addToCart(element);
          });
        } else {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/*Genel Div*/
.urunDetay {
  background: #f9f9f9;
  width: 90%;
  margin: 0 auto;
  min-height: 380px;
}

/*Soldaki Resmin bulunduğu bölge*/
.urunResimDiv {
  float: left;
  display: inline-block;
  width: 40%;
  background: white;
  height: 100%;
  padding: 50px 0;
}

.urunResimDiv img {
  margin: 100px 100px;
}

/*Resmin Sağ tarafı*/
.urunBody {
  display: inline-block;
  width: 59%;
}

/*Sağ tarafın sol alt bölümü*/
.urunBodySol {
  float: left;
  display: inline-block;
  margin-left: 30px;
  width: 45%;
}

.urunBodySol h1 {
  color: #4b5c6c;
}

/*Rating Yorum*/
.ratingYorum {
}

.ratingYorum span,
a {
  color: orangered;
  text-decoration: none;
}

.ratingYorum a:hover span {
  color: #b34700;
  text-decoration: underline;
}

.ratingYorum a:hover {
  color: #b34700;
  text-decoration: underline;
}

.yorumlar {
  margin-left: 30px;
}

/*Ürünün Açıklaması*/
.urunAciklama {
  font-size: 12px;
}

/*Price*/
.ucretText {
  color: orangered;
  font-size: 30px;
}

.ucretTextAciklama {
  font-size: 12px;
}

.stokDurumu {
  font-size: 12px;
}

.stokDurumu span {
  color: #1abc9c !important;
}

/*Ürünün Body kısmının sağ kısmı*/
.urunBodySag {
  border: 3px solid #1abc9c !important;
  display: inline-block;
  text-align: center;
  padding: 10px 20px 10px 20px;
  margin: 80px 0 0 40px;
  background: white;
  position: relative;
}

.urunBodySag h3 {
  color: #1abc9c !important;
  font-size: 1.75rem;
  margin: 5px;
}

.urunBodySag span {
  font-size: 14px;
}

.urunBodySag a {
  text-decoration: underline;
}

.urunBodySag a:hover {
  color: #b34700;
}

.urunBodySag::after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 19px 19px 0 0;
  border-color: #1abc9c transparent transparent transparent;
  position: absolute;
  bottom: -22px;
  right: -3px;
}

/*Urun Body ödeme seçenekleri*/
.urunSecenekler {
  background: white;
  /* border: 1px solid black;*/
  border-radius: 2px;
  /*  text-align: center;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 20px 0 30px;
  box-shadow: 1px 0 4px rgb(0 0 0 / 10%);
}

.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.urunSecenekler .item img {
  margin: 10px;
  width: 35px;
  float: left;
  display: inline-block;
}

.item span {
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
}

/*Ürün Seçimleri ve Buton Tarafı*/
.urunSecimler {
}
table {
  width: 95%;
  text-align: center;
  margin: 30px;
}
table,
tr,
td {
  /* border: 1px solid black;*/
}
td button {
  padding: 34px 20px;
  background: #db0000;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bolder;
  color: white;
}
td button:hover {
  cursor: pointer;
  background: #c30707 !important;
}
th {
  color: #ff6600;
  font-weight: 100;
  font-size: 14px;
}
td {
  color: #8192b1;
}
.dropdownFiltre {
  width: 100px;
  padding: 0;
  margin: 0;
  height: 37px;
  /* border: 1px solid orangered;*/
}
</style>