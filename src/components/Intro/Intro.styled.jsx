import styled from 'styled-components';

import forest_img from 'image/intro/forest.webp';

export const IntroSection = styled.section`
  background: rgba(0, 0, 0, 0.5) url(${forest_img});
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 100vh;
  min-height: 500px;
`;

export const IntroInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const IntroTitle = styled.h1`
  font-family: Oi, sans-serif;
  font-size: 50px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 30px;
`;

export const IntroText = styled.p`
  font-size: 20px;
  color: #fff;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const ContactWrapper = styled.div`
  display: flex;
`;

export const IntroTel = styled.a`
  background-color: rgb(146, 195, 190);
  height: 40px;
  padding: 0 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: color, background-color;
  text-decoration: none;
  color: #000;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    fill: #000;

    transition: fill 350ms ease;
  }

  &:hover {
    background-color: rgb(46, 107, 117);
    color: #fff;

    svg {
      fill: #fff;
    }
  }
`;

export const IntroLink = styled.button`
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  background-color: rgb(46, 107, 117);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  transition: background-color 350ms ease;

  svg {
    width: 40px;
    height: 40px;
    fill: #fff;
    transition: fill 350ms ease;
  }

  &:hover {
    background-color: #fff;

    svg {
      fill: rgb(46, 107, 117);
    }
  }
`;
