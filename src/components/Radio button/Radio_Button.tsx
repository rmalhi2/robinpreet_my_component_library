import styled from 'styled-components';
import { RadioButtonProps } from './Radio_Button.types';

interface StyledLabelProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => props.backgroundColor || '#007bff'};
`;


const RadioButton = (props:RadioButtonProps) => {
  return (
    <StyledLabel disabled={props.disabled} backgroundColor={props.backgroundColor}>
      <span>{props.label}</span>
      <input type="radio" name={props.name} disabled={props.disabled} />
    </StyledLabel>
  );
};

export default RadioButton;
