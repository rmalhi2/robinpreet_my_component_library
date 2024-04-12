import Label from './Label';

export default {
  title: 'Label',
  component: Label,
  tags: ['autodocs']
} 


export const Default = {
  args: {
    text: 'Hi I am Label :D',
    textColor: '#333', // Default text color
    disabled: false, // Default disabled state
    backgroundColor: '#ffffff',
  }
};

export const Disabled = {
  args: {
    text: 'Bye, I am disabled :(',
    textColor: '#ccc', // Text color when disabled
    disabled: true, // Disabled state
    backgroundColor: '#ccc',
  }
};

