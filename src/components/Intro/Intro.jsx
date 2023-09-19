import {
  ContactWrapper,
  IntroInner,
  IntroLink,
  IntroSection,
  IntroTel,
  IntroText,
  IntroTitle,
} from './Intro.styled';
import { Container } from '../App.styled';
import { Icon } from '../Icon/Icon';

export const Intro = () => {
  const linkToTelegram = () => {
    window.open('https://t.me/PavloParafilo', '_blank');
  };

  return (
    <IntroSection>
      <Container style={{ height: '100%' }}>
        <IntroInner>
          <IntroTitle lang={'en'}>Wood Engineering Standart</IntroTitle>

          <IntroText>
            Стартап Wood Engineering Standart прагне зайняти нішу аудиту лісових
            площ, використовуючи передові технології, такі як лідар і безпілотні
            літальні апарати, які вже успішно використовуються в інших
            розвинутих країнах, але ще не представлені на нашому ринку лісу.
          </IntroText>
          <ContactWrapper>
            <IntroTel href={'tel:+380975002212'}>
              <Icon name={'icon-phone'} /> +380 975 0022 12
            </IntroTel>
            <IntroLink type={'button'} onClick={linkToTelegram}>
              <Icon name={'icon-telegram'} />
            </IntroLink>
          </ContactWrapper>
        </IntroInner>
      </Container>
    </IntroSection>
  );
};
