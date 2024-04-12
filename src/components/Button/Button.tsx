
import { ButtonProps } from './Button.types';
import styled from 'styled-components';

const StyledButton = styled.button<{ backgroundColor?: string }>`
    padding: 10px 20px;
    background-color: ${props => props.backgroundColor || '#007bff'};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const Button = ( props: ButtonProps ) => {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled} backgroundColor={props.backgroundColor}>
            {props.label}
        </StyledButton>
    );
};

export default Button;

