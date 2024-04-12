
import { ImgProps } from './Img.types';
import styled, { css } from 'styled-components';

const StyledImg = styled.img<ImgProps>`
    display: block;
    max-width: 100%;
    padding: 1%;
    height: auto;
    background-color: ${props => props.backgroundColor || '#007bff'};

    ${(props) =>
        props.Circle &&
        css`
        border-radius: 50%;
        `}

    ${(props) =>
        props.Error &&
        css`
        filter: grayscale(100%);
        `}

    ${(props) =>
        props.disabled &&
        css`
        filter: grayscale(100%);
        cursor: not-allowed;
        `}
`;

const Img = (props: ImgProps) => {
    return (
        <StyledImg 
            src={props.src}
            alt={props.alt} 
            Circle={props.Circle} 
            Error={props.Error} 
            disabled={props.disabled} 
            backgroundColor={props.backgroundColor}
        />
    );
};


export default Img;
