// Dropdown.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

// Define the styled component as above
const StyledSelect = styled.select<{ backgroundColor?: string }>`
  background-color: ${props => props.backgroundColor || 'initial'};
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Dropdown = (props: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledSelect
      onChange={handleChange}
      disabled={props.disabled}
      value={selectedOption}
      backgroundColor={props.backgroundColor} 
    >
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
