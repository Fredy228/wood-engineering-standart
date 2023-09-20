import {
  GalleryImg,
  GalleryInner,
  GalleryItem,
  GalleryList,
  GallerySection,
} from './Gallery.styled';
import { Container } from '../App.styled';

import dron_img from 'image/gallery/dron.webp';
import forest_img from 'image/gallery/forest.webp';
import lidar_img from 'image/gallery/lidar.webp';

export const Gallery = () => {
  return (
    <GallerySection>
      <Container>
        <GalleryInner>
          <GalleryList>
            <GalleryItem>
              <GalleryImg src={forest_img} alt={'Ліс фото'} />
            </GalleryItem>
            <GalleryItem>
              <GalleryImg src={dron_img} alt={'Дрон фото'} />
            </GalleryItem>
            <GalleryItem>
              <GalleryImg src={lidar_img} alt={'Лідар фото'} />
            </GalleryItem>
          </GalleryList>
        </GalleryInner>
      </Container>
    </GallerySection>
  );
};
