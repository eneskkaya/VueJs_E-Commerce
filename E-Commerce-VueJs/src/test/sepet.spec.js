import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import Sepetim from "../components/sepet.vue";
describe("Sepetimdeki ürünlerin listelenmesi", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    const mockFunction = jest.fn();
    const cartGridModel = [{
        product: {
            "id": 5,
            "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu",
            "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...",
            "fiyat": 149.90,
            "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-1-l.jpg"
        },
        cart: {
            id: "1213",
            count: 3,
            pid: 5,
            goz: "Sol",
            dia: "14:00",
            bc: "8.40",
            sph: "-12.00"
        }
    }, {
        product: {
            "id": 6,
            "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu",
            "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...",
            "fiyat": 149.90,
            "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-1-l.jpg"
        },
        cart: {
            id: "1214",
            count: 3,
            pid: 5,
            goz: "Sağ",
            dia: "14:00",
            bc: "8.40",
            sph: "-12.00"
        }
    }];
    const wrapper = mount(Sepetim, {
        stubs: ["router-link"],
        localVue,
        store: new Vuex.Store({
            actions: {
                fetchCartGridModel: () => {
                    return new Promise(resolve => {
                        resolve(cartGridModel)
                    })
                },
            },
        })
    })

    describe("Gözükecekler", () => {
        it("Kargo Ücreti text", () => {
            expect(wrapper.text()).toContain("Kargo Ücreti");
        });
        it("Ürün 1'in adı : Acuvue OASYS ® 1-Day 30 lu Kutu :", () => {
            expect(wrapper.text()).toContain("Acuvue OASYS ® 1-Day 30 lu Kutu");
        });

        it("Ürün 1'nin hangi göze göre olduğu : Sol", () => {
            expect(wrapper.text()).toContain("Sol");
        });

        it("Ürün 2'in adı : Acuvue OASYS ® 1-Day 30 lu Kutu :", () => {
            expect(wrapper.text()).toContain("Acuvue OASYS ® 1-Day 30 lu Kutu");
        });

        it("Ürün 2'nin hangi göze göre olduğu : Sağ", () => {
            expect(wrapper.text()).toContain("Sağ");
        });
        it("Toplam Sepet Tutarı : 3*149.90", () => {
            const expectedTotal = Number.parseFloat(3 * 149.90).toFixed(2)
            expect(wrapper.text()).toContain(expectedTotal);
        });
    });

    test("Snapshot Testi", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
})