
import { TableFooterProps } from './TableFooter.types';
import styled from 'styled-components';
import TableCell from '../TableCell';

const StyledTableFooter = styled.tr<{ disabled?: boolean; backgroundColor?: string}>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  font-weight: bold;
  background-color: ${props => props.backgroundColor || '#007bff'};
  padding: 1%;
`;

const TableFooter= ( props: TableFooterProps ) => {
  return (
    <StyledTableFooter disabled={props.disabled} backgroundColor={props.backgroundColor}>
      <TableCell children={"Footer Content"}></TableCell>
    </StyledTableFooter>
  );
};

export default TableFooter;