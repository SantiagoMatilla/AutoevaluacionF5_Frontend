import { mount } from '@vue/test-utils';
import ProgressCard from '@/components/ProgressCard.vue';
import { describe } from 'vitest';






describe('ProgressCard.vue', () => {
  it('renders props.ProgressCard when passed', () => {
    const ProgressCardText = '1ª Evaluación';
    const wrapper = mount(ProgressCard, {
      props: {
        ProgressCard: ProgressCardText,
        cardColor: 'black', // color tarjete
      },
    });

   // renderiza progressCard
    expect(wrapper.text()).toContain(ProgressCardText);
   
  });
});
