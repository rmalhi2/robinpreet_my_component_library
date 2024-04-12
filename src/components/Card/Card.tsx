import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 25%;
  background-color: ${props => props.backgroundColor || '#007bff'};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 14px;
`;

const Card = (props:CardProps) => {
  return (
    <StyledCard disabled={props.disabled} imageSrc={props.imageSrc} alt={props.alt} description={props.description} backgroundColor={props.backgroundColor}>
      <CardImage src={props.imageSrc} alt={props.alt} />
      <CardText>{props.description}</CardText>
    </StyledCard>
  );
};

export default Card;
