import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import login from '../components/uyeGirisi.vue'

import storeConfig from "../store";

const localVue = createLocalVue();
localVue.use(Vuex);
describe('login', () => {
    let wrapper;
    const mockFunction = jest.fn();
    describe('login Butonuna Basıldığında', () => {
        beforeEach(() => {
            wrapper = mount(login, {
                localVue,
                data() {
                    return {
                        userInfo: {
                            email: 'test@test.com',
                            password: '111222',
                        }
                    };
                },
                store: new Vuex.Store({
                    actions: {
                        login: mockFunction,
                    },
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
        test('login fonksiyonun çağrılması', async() => {
            const loginButton = wrapper.find(".login_button");
            loginButton.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        });
    });

    test('Vue Örneği mi?', () => {
        const wrapper = mount(login, { stubs: ['router-link'] })
        expect(wrapper.vm).toBeTruthy()
    });

    test("Snapshot Testi", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});