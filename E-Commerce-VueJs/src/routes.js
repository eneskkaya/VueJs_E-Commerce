import Anasayfa from "./pages/Anasayfa.vue"
import saydamLens from "./pages/saydamLens.vue"
import gunlukLens from "./pages/gunlukLens.vue"
import renkliLens from "./pages/renkliLens.vue"
import toricLens from "./pages/toricLens.vue"
import indirimliLens from "./pages/indirimliLens.vue"
import solusyon from "./pages/solusyonlar.vue"
import gozBakim from "./pages/gozBakim.vue"
import kampanyalar from "./pages/kampanyalar.vue"
import login from "./pages/login.vue"
import uyeOl from "./pages/uyeOl.vue"
import sepetim from "./pages/sepetim.vue"
import urun from "./pages/urun.vue"

export const routes = [
    { path: '/', component: Anasayfa },
    { path: '/Anasayfa', component: Anasayfa },
    { path: '/sepetim', component: sepetim },
    { path: '/urun/:id', component: urun, name: "urun" },
    { path: '/saydamLens', component: saydamLens },
    { path: '/gunlukLens', component: gunlukLens },
    { path: '/renkliLens', component: renkliLens },
    { path: '/toricLens', component: toricLens },
    { path: '/indirimliLens', component: indirimliLens },
    { path: '/solusyon', component: solusyon },
    { path: '/gozBakim', component: gozBakim },
    { path: '/kampanyalar', component: kampanyalar },
    { path: '/login', component: login },
    { path: '/uyeOl', component: uyeOl }
];