import { mount } from '@vue/test-utils';
import Content from './Content.vue';

describe('Content.vue', () => {
    // test('setup correctly', () => {
    //     expect(true).toBe(true);
    // })

    test('setup correctly', () => {
        const wrapper = mount(Content);
        expect(wrapper.isEmptyRender()).toBe(true)

        // const wrapper = mount(Content);
        // expect(wrapper.text()).toContain('fileContents:"test"');
        //expect(wrapper.find("code").text()).toBe("test");  
    })
});