
import { mount} from '@vue/test-utils';
import SelectCard from '@/components/SelectCard.vue';
import { describe, expect } from 'vitest';

describe('SelectCard', () => {
    it('renders correctly', () => {
        const wrapper = mount (SelectCard)
        expect(wrapper.exists()).toBe(true)
    })
    it('has an access button',() => {
        const wrapper = mount (SelectCard)
        expect (wrapper.find('.button').exists()).toBeTruthy()
    })
    it('has a header', () => {
        const wrapper = mount (SelectCard)
        expect(wrapper.find('h3').exists()).toBeTruthy()
    })
    it('has a selector', () => {
        const wrapper = mount (SelectCard)
        expect(wrapper.find('v-select').exists()).toBeTruthy()
    })
    
})