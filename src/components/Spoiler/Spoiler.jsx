import {
  SpoilerButton,
  SpoilerContainer,
  SpoilerContent,
  SpoilerWrapperBtn,
} from './Spoiler.styled';
import { useState } from 'react';
import { Container } from '../App.styled';

export const Spoiler = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSpoiler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SpoilerContainer>
      <SpoilerWrapperBtn>
        <Container>
          <SpoilerButton onClick={toggleSpoiler}>
            {title} {isOpen ? '▲' : '▼'}
          </SpoilerButton>
        </Container>
      </SpoilerWrapperBtn>
      <Container>
        <SpoilerContent isopen={isOpen.toString()}>{children}</SpoilerContent>
      </Container>
    </SpoilerContainer>
  );
};
