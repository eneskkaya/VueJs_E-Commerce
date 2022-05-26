<template>
  <div>
    <ust-menu></ust-menu>
    <div class="container">
      <div class="uyelikHeader">
        <div class="logoBox">
          <img
            src="src/assets/register.png"
            alt="yok"
            style="width: 60px; margin-top: 7px"
          />
        </div>
        <h2>ÜYE OLMAK İSTİYORUM</h2>
      </div>

      <form>
        <div>
          <label>Adınız</label>
          <input type="text" required v-model="userInfo.name" />
          <label>Soyadınız</label>
          <input type="text" required v-model="userInfo.surname" />
        </div>
        <label>E-posta</label>
        <input type="text" required v-model="userInfo.email" />
        <label>Şifre</label>
        <input type="password" required v-model="userInfo.password" />
        <label>Şifre Tekrar</label>
        <input type="password" required v-model="re_password" />

        <label>Doğrula</label>
        <div class="reCaptcha">
          <label class="beniHatirla">
            <input type="checkbox" />Ben robot değilim
          </label>
          <img src="src/assets/recaptcha.png" />
        </div>
        <label class="beniHatirla">
          <input type="checkbox" />Özel kampanyalardan ilk sen haberdar ol
          Kampanya ve Bülten, SMS, E-Postalarını Aydınlatma ve Rıza Metni
          kapsamında almak istiyorum</label
        >
        <input
          type="submit"
          value="HESABIMI OLUŞTUR"
          class="register_button"
          @click.prevent="register(userInfo)"
        />
      </form>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ustMenu from "../components/ustMenu.vue";
import { mapActions } from "vuex";
import { auth } from "../../firebase/config"
library.add(fas);
export default {
  components: {
    FontAwesomeIcon,
    ustMenu,
  },
  data() {
    return {
      userInfo: { name: "", surname: "", email: "", password: "" },
      re_password: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/"); // Anasayfaya yönlendiriyor giriş yapılmışsa
      } 
    });
  },
};
</script>
<style scoped>
.container {
  width: 40%;
  margin: 0 auto;
  height: 700px;
  border: 1px solid;
  border-radius: 3px;
  border-top-left-radius: 5px;
}
.uyelikHeader {
  /* border: 1px solid gray;*/
}
.logoBox {
  float: left;
  display: inline-block;
  /* border: 1px solid gray;*/
  width: 15%;
  text-align: center;
  /*background: #639af2;*/
  background-color: #f39c12;
  height: 70px;
  color: white;
  border-radius: 3px;
}
.uyelikHeader h2 {
  display: inline-block;
  font-weight: 100;
  padding-left: 20px;
  color: #444;
  -webkit-tap-highlight-color: transparent;
}
.uyariBox {
  margin-top: 50px;
  margin-left: 15%;
  margin-right: 5%;
  padding: 2px 20px;
  background-color: #f2dede;
  border-color: #ebcccc;
  color: #a94442;
  border-radius: 5px;
  font-size: 12px;
}
label {
  margin-top: 5px;
  margin-left: 12%;
  margin-right: 5%;
  padding: 2px 20px;
  border-radius: 5px;
  display: block;
}
.reCaptcha input[type="checkbox"] {
  margin-left: -25%;
  margin-top: -15px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 25px;
  width: 24px;
}
input[type="text"],
input[type="password"] {
  width: 80%;
  margin-top: 5px;
  padding: 12px 20px;
  margin-left: 15%;
  margin-right: 5%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  background-color: #f39c12;
  color: white;
  padding: 14px 20px;
  margin-left: 15%;
  margin-right: 5%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
input[type="submit"]:hover {
  color: #fff;
  background-color: #0079ac;
  border-color: #0072a2;
}
.passwordLink {
  color: #009ddf;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
}
.passwordLink:hover {
  color: orangered;
  text-decoration: underline;
  font-size: 13px;
  font-weight: bold;
}
.beniHatirla {
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.beniHatirla input[type="checkbox"] {
  background: gray;
}
.reCaptcha {
  width: 50%;
  background-color: #e1e1e1;
  color: black;
  padding: 14px 20px;
  margin-left: 15%;
  margin-right: 5%;
  border: 1px solid gray;

  cursor: pointer;
}
.reCaptcha input[type="checkbox"] {
  margin-left: -25%;
  margin-top: -15px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 25px;
}
.reCaptcha img {
  float: right;
  display: inline-block;
  margin-top: -40px;
  border-radius: 4px;
  box-sizing: border-box;
  height: 50px;
}
</style>