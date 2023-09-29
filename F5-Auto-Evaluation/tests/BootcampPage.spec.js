import { mount } from '@vue/test-utils';
import { describe, expect } from 'vitest';
import BootcampPage from '@/components/BootcampPage.vue';

describe('BootcampPage', () => {
    it('should render correctly', () => {
        const wrapper = mount(BootcampPage);
        expect(wrapper.exists()).toBe(true)
    } )
    it('has background', () => {
        const wrapper = mount(BootcampPage)
          //.background
        expect(wrapper.find('.background').exists()).toBeTruthy()
    })
    it('contains SelectCard', () => {
        const wrapper = mount (BootcampPage)
        //SelectCard Component
        expect(wrapper.find('.select_card').exists()).toBeTruthy()
    })
})