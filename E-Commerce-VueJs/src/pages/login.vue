<template>
  <div>
    <ust-menu></ust-menu>
    <uye-girisi/>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ustMenu from "../components/ustMenu.vue";
import { mapActions } from "vuex";

import { auth } from "../../firebase/config"
import UyeGirisi from '../components/uyeGirisi.vue';
library.add(fas);
export default {
  components: {
    FontAwesomeIcon,
    ustMenu,
    UyeGirisi,
  }
};
</script>