import { mount } from '@vue/test-utils';
import SkillsCard from '@/components/SkillsCard.vue';
import { describe, expect } from 'vitest';




// el componente se redendira correctamenere
describe('SkillsCard', () => {
    it ('renders correctly', () => {
        const wrapper = mount(SkillsCard)
        expect(wrapper.exists()).toBe(true)
    })
// el componente tiene un boton de acceso
    it('has an access button', () => {
        const wrapper = mount(SkillsCard)
        const accessButton = wrapper.find('.accessButton')
        expect(accessButton.exists()).toBe(true)
      })
// tiene un titulo
      it('has a title', () => {
        const wrapper = mount(SkillsCard)
        const title = wrapper.find('v-card-title')
        expect(title.exists()).toBe(true)
      })

// tiene un subtitulo
      it('has a subtitle', () => {
        const wrapper = mount(SkillsCard)
        const subtitle = wrapper.find('v-card-subtitle')
        expect(subtitle.exists()).toBe(true)
      })
// tienen una imagen 
      it('has a image', () => {
        const wrapper = mount(SkillsCard)
        const image = wrapper.find('v-img')
        expect(image.exists()).toBe(true)
      })
    }) 




