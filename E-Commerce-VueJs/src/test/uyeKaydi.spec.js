import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import register from '../components/uyeKaydi.vue'


const localVue = createLocalVue();
localVue.use(Vuex);
describe('uyeOl', () => {
    let wrapper;
    const mockFunction = jest.fn();
    describe('Kaydol Butonuna Basıldığında', () => {
        beforeEach(() => {
            wrapper = mount(register, {
                localVue,
                data() {
                    return {
                        userInfo: {
                            email: 'test@test.com',
                            password: '111222',
                            name: "Ali",
                            surname: "Kaya"
                        }
                    };
                },
                store: new Vuex.Store({
                    actions: {
                        register: mockFunction,
                    },
                    state: {
                        cart: []
                    }
                }),
                mocks: {
                    $router: {
                        push: jest.fn()
                    }
                },
                stubs: ['router-link']
            });
        });
        // eslint-disable-next-line require-await
        test('register fonksiyonun çağrılması', async() => {
            const Button = wrapper.find(".register_button");
            Button.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        });
    });


    test('Vue Örneği mi?', () => {
        const wrapper = mount(register, { stubs: ['router-link'] })
        expect(wrapper.vm).toBeTruthy()
    });
    test("Snapshot Testi", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

});