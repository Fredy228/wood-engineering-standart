import {
  BenefitsItem,
  BenefitsItemText,
  BenefitsItemTitle,
  BenefitsList,
  BenefitsSection,
} from './Benefits.styled';
import { Spoiler } from '../Spoiler/Spoiler';
import { listTechnology, listSemis } from './ListBenefits';

export const Benefits = () => {
  return (
    <>
      <BenefitsSection>
        <Spoiler title={'Переваги технології'}>
          <BenefitsList>
            {listTechnology.map(item => (
              <BenefitsItem key={item.id}>
                <BenefitsItemTitle>{item.title}</BenefitsItemTitle>
                <BenefitsItemText>{item.text}</BenefitsItemText>
              </BenefitsItem>
            ))}
          </BenefitsList>
        </Spoiler>
      </BenefitsSection>

      <BenefitsSection>
        <Spoiler title={'Наші послуги'}>
          <BenefitsList>
            {listSemis.map(item => (
              <BenefitsItem key={item.id}>
                <BenefitsItemTitle>{item.title}</BenefitsItemTitle>
                <BenefitsItemText>{item.text}</BenefitsItemText>
              </BenefitsItem>
            ))}
          </BenefitsList>
        </Spoiler>
      </BenefitsSection>
    </>
  );
};
