import { CardContainer, CardAuthor, CardText } from "./StyledCard";

export default function Card(card) {
  return (
    <CardContainer>
      <CardAuthor>{card.author}</CardAuthor>
      <CardText>{card.content}</CardText>
    </CardContainer>
  );
}
