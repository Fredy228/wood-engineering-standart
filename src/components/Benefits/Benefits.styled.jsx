import styled from 'styled-components';

export const BenefitsSection = styled.section``;

export const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 30px 0;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 20px auto 0 auto;
  }
`;

export const BenefitsItem = styled.li`
  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 15px auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(40px / 2);
    flex-basis: calc(100% / 2 - 40px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(20px / 2);
    flex-basis: calc(100% / 2 - 20px);
  }
`;

export const BenefitsItemTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  color: rgb(46, 107, 117);
`;

export const BenefitsItemText = styled.p`
  font-size: 16px;
`;
