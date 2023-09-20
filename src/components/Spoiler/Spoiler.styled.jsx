import styled from 'styled-components';

export const SpoilerContainer = styled.div`
  overflow: hidden;
`;

export const SpoilerWrapperBtn = styled.div`
  width: 100%;
  background-color: rgb(46, 107, 117);
`;

export const SpoilerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-family: Oi, sans-serif;
  padding: 15px 0;
  color: #fff;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const SpoilerContent = styled.div`
  max-height: ${({ isopen }) => (isopen === 'true' ? '2000px' : '0')};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;
