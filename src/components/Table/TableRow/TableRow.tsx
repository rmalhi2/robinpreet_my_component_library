import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';
import TableCell from '../TableCell';

const StyledTableRow = styled.tr<{ disabled?: boolean; backgroundColor?: string }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  background-color: ${props => props.backgroundColor || '#007bff'};
  padding: 1%;
`;

const TableRow= ( props:TableRowProps ) => {
  return (
    <StyledTableRow disabled={props.disabled} backgroundColor={props.backgroundColor}>
      <TableCell children={"Robin"}></TableCell>
      <TableCell children={"100"}></TableCell>
      <TableCell children={"Winnipeg"}></TableCell>
      <TableCell children={"Web Development"}></TableCell>
      <TableCell children={"0493613"}></TableCell>
    </StyledTableRow>
  );
};

export default TableRow;
