import styled from 'styled-components';

export const GallerySection = styled.div`
  background-color: rgb(46, 107, 117);
`;

export const GalleryInner = styled.div`
  padding: 25px 0;
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const GalleryItem = styled.li`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  display: block;

  &:first-child {
    width: 100%;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 107, 117, 0.3);
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 5px;
  }
`;

export const GalleryImg = styled.img`
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    border-radius: 10px;
  }
`;
