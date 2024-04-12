import { HeroImgProps } from './Hero_Image.types';
import styled, { css } from 'styled-components';

const StyledImg = styled.img<HeroImgProps>`
  width: 100%;
  height: auto;
  padding: 1%;
  background-color: ${props => props.backgroundColor || '#007bff'};

  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%);
      cursor: not-allowed;
    `}
`;

const HeroImg = (props:HeroImgProps) => {
  return <StyledImg
         src={props.src} 
         alt={props.alt}
         disabled={props.disabled} 
         backgroundColor={props.backgroundColor}
         />;
};

export default HeroImg;
