import { CardContainer, CardAuthor, CardText } from "./StyledCard";

export default function StyledCard(card) {
  return (
    <CardContainer>
      <CardAuthor>{card.author}</CardAuthor>
      <CardText>{card.content}</CardText>
    </CardContainer>
  );
}
