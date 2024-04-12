import TableHeader from './TableHeader';

export default {
  title: 'Table/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
}

export const Default = {
    args: {
      label: 'TableHeader',
      backgroundColor: '#ffffff', // Default background color
      disabled: false, // Default state
    },
};

export const Disabled = {
  args:{
  label: 'TableHeader',
  backgroundColor: '#ccc', // Background color when disabled
  disabled: true, // Disabled state
  }
};


