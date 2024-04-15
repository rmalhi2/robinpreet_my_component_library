
import TableRow from './TableRow';

export default {
  title: 'Table/TableRow',
  component: TableRow,
}

export const Default = {
  args: {
    backgroundColor: '#ffffff',
  }
};

export const Disabled = {
  args: {
    disabled: true,
    backgroundColor: '#cccccc', // Light grey background to show disabled state
  }
};
