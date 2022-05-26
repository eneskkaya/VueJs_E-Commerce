import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import urunler from "../components/urunler.vue";
describe("Ürünler Listesi", () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const mockFunction = jest.fn();
    const products = [{ "id": 1, "urunAdi": "ali", "urunAciklama": "Saydam Kontakt Lens Bilgisayar karşısında ve klimalı ortamlarda benzersiz üstün konfor...", "fiyat": 119.90, "image": "https://cdn.lensmarket.com/ext/urun/oasys-1-l.jpg" },
        { "id": 2, "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu", "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...", "fiyat": 149.90, "image": "https://cdn.lensmarket.com/ext/urun/oasys-1day-1-l.jpg" },
        { "id": 3, "urunAdi": "Acuvue OASYS ® with Transitions™", "urunAciklama": "Türünün ilk örneği, ışığa duyarlı lens. Time'a Göre 2018'in en iyi buluşlarından biri!", "fiyat": 41.90, "image": "https://cdn.lensmarket.com/ext/urun/oasys-transitions-1-l.jpg" },
    ];
    const fetchProducts = () => {
        return new Promise(resolve => {
            resolve(products)
        })
    };
    const wrapper = mount(urunler, {
        stubs: ["router-link"],
        localVue,
        store: new Vuex.Store({
            actions: {
                fetchProducts: fetchProducts
            },
        })
    })

    describe("Liste Kontrolü", () => {
        it("Ürün 1'in adı : ali :", () => {
            expect(wrapper.text()).toContain("ali");
        });
        it("Ürün 2'nin açıklaması : Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek... :", () => {
            expect(wrapper.text()).toContain("Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...");
        });

        it("Ürün 3'ün fiyatı : 41.90", () => {
            expect(wrapper.text()).toContain("41.90");
        });
        test("Snapshot Testi", () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    test('fetchProducts Fonsiyonu Ürün listesini çözümler', () => {
        return expect(fetchProducts()).resolves.toBe(products);
    });
})