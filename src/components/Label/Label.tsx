import { LabelProps } from './Label.types';
import styled, {css} from 'styled-components';

const StyledLabel = styled.label<LabelProps>`
  font-size: 16px;
  color: black;
  background-color: ${props => props.backgroundColor || '#007bff'};
  
  ${(props) =>
    props.disabled &&
    css`
      text-decoration: none;
      font-size: 16px;
      color: grey;
      cursor: not-allowed;
    `}
`;

const Label = (props: LabelProps) => {
    return (
        <StyledLabel 
        disabled={props.disabled} 
        textColor={props.textColor}
        text={props.text}
        backgroundColor={props.backgroundColor}>
            {props.text}
        </StyledLabel>
    );
};

export default Label;