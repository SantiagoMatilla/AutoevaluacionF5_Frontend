import { mount } from '@vue/test-utils';
import ProgressCard from '@/components/ProgressCard.vue';

//  para el componente ProgressCard.vue
describe('ProgressCard.vue', () => {
  // si el texto se muestra correctamente
  it('renders props.ProgressCard when passed', () => {
    const ProgressCardText = '1ª Evaluación';
    const wrapper = mount(ProgressCard, {
      props: {
        ProgressCard: ProgressCardText,
      },
    });

    // Comprobar que el texto se muestra correctamente en el componente
    expect(wrapper.text()).toContain(ProgressCardText);

    
   
  });


  

    
   

  
  });

