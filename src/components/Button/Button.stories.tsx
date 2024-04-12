import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }, // Adding color control
  },
}

export const Default = {
    args: {
      label: 'Button',
      backgroundColor: '#007bff', // Default background color
      disabled: false, // Default state
    },
};

export const Disabled = {
  args:{
  label: 'Button',
  backgroundColor: '#ccc', // Background color when disabled
  disabled: true, // Disabled state
  }
};


