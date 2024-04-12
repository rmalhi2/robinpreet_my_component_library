import TableRow from './TableRow';
import TableCell from '../TableCell';

export default {
  title: 'Table/TableRow',
  component: TableRow,
}

export const Default = {
    args : {
        children: [<TableCell key={1}>Cell Content 1</TableCell>, <TableCell key={2}>Cell Content 2</TableCell>],
        backgroundColor: '#ffffff',
    }
};

export const Disabled = {
    args : {
        children: [<TableCell key={1}>Cell Content 1</TableCell>, <TableCell key={2}>Cell Content 2</TableCell>],
        disabled: true,
        backgroundColor: '#ffffff',
    }
};
