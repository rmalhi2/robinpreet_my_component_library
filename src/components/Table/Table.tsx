import { TableProps } from './Table.types';
import { TableHeader } from "./TableHeader";
import { TableFooter } from "./TableFooter";
import { TableRow } from "./TableRow";
import styled from 'styled-components';

const StyledTable = styled.table<{ disabled?: boolean; backgroundColor?: string  }>`
    width: 100%;
    border-collapse: collapse;
    background-color: ${props => props.backgroundColor || '#007bff'};

    ${(props) =>
        props.disabled &&
        `
        color: #ccc;
        cursor: not-allowed;
    `}
`;

const Table= (props:TableProps) => {
    return (
        <StyledTable disabled={props.disabled}
        backgroundColor={props.backgroundColor}>
            <caption>{props.label}</caption>
            <thead>
                <tr>
                    <TableHeader/>
                </tr>
            </thead>
            <tbody>
                <TableRow children="row"/>
            </tbody>
            <tfoot>
                <TableFooter></TableFooter>
            </tfoot>
        </StyledTable>
    );
};

export default Table;