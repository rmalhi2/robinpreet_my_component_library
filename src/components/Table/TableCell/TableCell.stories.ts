import TableCell from './TableCell';


export default {
  title: 'Table/TableCell',
  component: TableCell,
}

export const Default = {
    args : {
        children: 'Cell Content',
        backgroundColor: '#ffffff', // Default background color
    }
};

export const Disabled = {
    args : {
        children: 'Cell Content',
        backgroundColor: '#ccc', // Background color when disabled
        disabled: true,
    }
};
