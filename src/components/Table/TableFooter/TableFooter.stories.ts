import TableFooter from './TableFooter';

export default {
  title: 'Table/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
}

export const Default = {
    args: {
      label: 'TableFooter',
      backgroundColor: '#ffffff',
      disabled: false, // Default state
    },
};

export const Disabled = {
  args:{
  label: 'TableFooter',
  backgroundColor: '#ccc', // Background color when disabled
  disabled: true, // Disabled state
  }
};


