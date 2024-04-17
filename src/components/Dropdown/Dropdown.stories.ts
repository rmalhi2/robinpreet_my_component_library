// import Dropdown from './Dropdown';

// export default {
//   title: 'Dropdown',
//   component: Dropdown,
//   tags: ['autodocs'],
// }

// export const Default = {
//     args:{
//         options: ['Option 1', 'Option 2', 'Option 3'],
//         disabled: false,
//     }
// };

// export const Disabled = {
//     arg:{
//         options: ['Option 1', 'Option 2', 'Option 3'],
//         disabled: true,
//     }
// };

import Dropdown from './Dropdown';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    options: ['Yes', 'No', 'Maybe'],
    disabled: false,
    backgroundColor: '#ffffff',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');
    await userEvent.selectOptions(select, 'Maybe');  //Change the dropdown to "Maybe"
    await userEvent.selectOptions(select, 'No');  //hange the dropdown to "No"
    await userEvent.selectOptions(select, 'Yes');  //change the dropdown to "Yes"
    await new Promise((r) => setTimeout(r, 500));  //adding delay
  }
};

export const Disabled = {
  args: {
    options: ['Yes', 'No', 'Maybe'],
    disabled: true,
    backgroundColor: '#ccc',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');
    await userEvent.selectOptions(select, 'Maybe');  //try to change the dropdown to "Maybe"
    await userEvent.selectOptions(select, 'No');  //try to change the dropdown to "No"
    await userEvent.selectOptions(select, 'Yes');  //try to change the dropdown to "Yes"

  }
};
