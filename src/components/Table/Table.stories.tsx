
import Table from './Table';

export default {
    title: 'Table',
    component: Table,
};


export const Default = {
  args : {
      label: 'Table',
      backgroundColor: '#ffffff',
      disabled: false,
    }
};

export const Disabled = {
  args : {
      label: 'Disabled Table',
      backgroundColor: '#ccc',
      disabled: true,
    }
};
