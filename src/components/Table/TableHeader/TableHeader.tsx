// import React from 'react';
import { TableHeaderProps } from './TableHeader.types';
import styled from 'styled-components';
import TableCell from '../TableCell';

const StyledTableHeader = styled.tr<{ disabled?: boolean; backgroundColor?: string }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  font-weight: bold;
  background-color: ${props => props.backgroundColor || '#007bff'};
  padding: 1%;
`;

const TableHeader = ( props: TableHeaderProps ) => {
  return (
    <StyledTableHeader disabled={props.disabled} backgroundColor={props.backgroundColor}>
      <TableCell children={"Name"}></TableCell>
      <TableCell children={"Marks"}></TableCell>
      <TableCell children={"Address"}></TableCell>
      <TableCell children={"Course"}></TableCell>
      <TableCell children={"Student ID"}></TableCell>
    </StyledTableHeader>
  );
};

export default TableHeader;