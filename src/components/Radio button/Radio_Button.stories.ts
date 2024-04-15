
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

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} 


export const Default = {
    args: {
        label: 'Option 1',
        name: 'test',
        isSelected: false,
        disabled: false,
        backgroundColor: '#ffffff',
    }
};

export const Disabled = {
    args : {
        label: 'Option 1',
        name: 'test',
        disabled: true,
        backgroundColor: '#ccc',
    }
};
