
// import RadioButton from './Radio_Button';

// export default {
//   title: 'RadioButton',
//   component: RadioButton,
//   tags: ['autodocs'],
// }


// export const Default = {
//     args : {
//         disabled: false,
//     }
// };

// export const Disabled = {
//     args: {
//         disabled: true,
//     }
// };



import RadioButton from './Radio_Button';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Option 1',
    name: 'test',
    disabled: false,
    backgroundColor: '#ffffff',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole('radio', { name: 'Option 1' });

    //clicking the radio button to select it
    await userEvent.click(radioButton);
    
  }
};

export const Disabled = {
  args: {
    label: 'Option 1',
    name: 'test',
    disabled: true,
    backgroundColor: '#ccc',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole('radio', { name: 'Option 1' });

    //try to click the disabled radio button
    await userEvent.click(radioButton);
    
  }
};
