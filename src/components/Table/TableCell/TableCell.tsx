import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ disabled?: boolean; backgroundColor?: string  }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${props => props.backgroundColor || '#007bff'};
  padding: 1%;
`;

const TableCell = (props: TableCellProps) => {
    return (
        <StyledTableCell disabled={props.disabled} backgroundColor={props.backgroundColor}>
            {props.children}
        </StyledTableCell>
    );
};

export default TableCell;
