import store from '../store'
describe('getProductWithId', () => {
    it('id si belirtilen ürünü getirme', () => {
        // mock state
        const state = {
            products: [
                { "id": 1, "urunAdi": "ali", "urunAciklama": "Saydam Kontakt Lens Bilgisayar karşısında ve klimalı ortamlarda benzersiz üstün konfor...", "fiyat": 119.90, "image": "https://cdn.lensmarket.com/ext/urun/oasys-1-l.jpg" },
                { "id": 2, "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu", "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...", "fiyat": 149.90, "image": "https://cdn.lensmarket.com/ext/urun/oasys-1day-1-l.jpg" },
                { "id": 3, "urunAdi": "Acuvue OASYS ® with Transitions™", "urunAciklama": "Türünün ilk örneği, ışığa duyarlı lens. Time'a Göre 2018'in en iyi buluşlarından biri!", "fiyat": 41.90, "image": "https://cdn.lensmarket.com/ext/urun/oasys-transitions-1-l.jpg" },
                { "id": 4, "urunAdi": "Precision 1", "urunAciklama": "PRECISION 1 ® kontakt lensler, günlük lensler ile yaşam özgürlüğünü hissetmek isteyenler içi...", "fiyat": 189.90, "image": "https://cdn.lensmarket.com/ext/urun/precision-1-day-1-l.jpg" },
                { "id": 5, "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu", "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...", "fiyat": 149.90, "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-1-l.jpg" },
                { "id": 6, "urunAdi": "Acuvue OASYS ® with Transitions™", "urunAciklama": "Türünün ilk örneği, ışığa duyarlı lens. Time'a Göre 2018'in en iyi buluşlarından biri!", "fiyat": 119.90, "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-1-l.jpg" },
                { "id": 7, "urunAdi": "Acuvue OASYS", "urunAciklama": "Saydam Kontakt Lens Bilgisayar karşısında ve klimalı ortamlarda benzersiz üstün konfor...", "fiyat": 119.90, "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-1-l.jpg" },
                { "id": 8, "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu", "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...", "fiyat": 149.90, "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-toric-1-l.jpg" },
                { "id": 9, "urunAdi": "Ultra", "urunAciklama": "Aylık saydam lens. MoistureSeal teknolojisiyle gözlerinizi yeni bir kontak lens devrine açın.", "fiyat": 199.90, "image": "https://cdn.lensmarket.com/ext/urun/biofinity2-1-l.jpg" }
            ]
        }
        store.state.products = state.products;
        // mock getter
        const id = 5

        // get the result from the getter
        const result = store.getters.getProductWithID(id)

        const expected = { "id": 5, "urunAdi": "Acuvue OASYS ® 1-Day 30 lu Kutu", "urunAciklama": "Günlük Kontakt Lens ACUVUE OASYS 1-Day silikon hidrojel günlük kontakt lensler en yüksek...", "fiyat": 149.90, "image": "https://cdn.lensmarket.com/ext/urun/air-optix-hydraglyde-1-l.jpg" };

        // assert the result
        expect(result).toEqual(expected)
    })
})