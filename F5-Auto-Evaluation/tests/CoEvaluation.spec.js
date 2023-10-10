import { mount } from '@vue/test-utils';
import CoEvaluation from '@/components/CoEvaluation.vue';


describe('CoEvaluation.vue', () => {
  
  it('displays the title correctly', () => {
    const wrapper = mount(CoEvaluation);

  });

  // renderiza el componente ProgressCard con el texto correcto
  it('renders ProgressCard with the correct text', () => {
    const wrapper = mount(CoEvaluation);

    //  componentes ProgressCard se renderizan con el texto correcto
    expect(wrapper.text()).toContain('1ª Evaluación');
    expect(wrapper.text()).toContain('2ª Evaluación');
    expect(wrapper.text()).toContain('3ª Evaluación');
    expect(wrapper.text()).toContain('4ª Evaluación');

  
  });

  
});
