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

export default {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

export const Default = {
    args: {
        options: ['Yes', 'No', 'Maybe'],
        disabled: false,
        backgroundColor: '#ffffff',
    }
};

export const Disabled = {
    args : {
        options: ['Yes', 'No', 'Maybe'],
        disabled: true,
        backgroundColor: '#ccc',
    }
};
