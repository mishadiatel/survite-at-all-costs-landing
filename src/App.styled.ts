import styled from 'styled-components';
import {theme} from './utils/theme';

export const Container = styled.div<{ $direction?: boolean }>`
  width: 100%;
  max-width: 1230px;
  padding: 0 1rem;
  margin: 0 auto;
  z-index: 5;
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
`;

export const SectionTitle = styled.h2<{ $center?: boolean }>`
  font-family: ${theme.font.babes};
  font-size: 5rem;
  color: ${theme.color.white};
  letter-spacing: 0.18rem;
  z-index: 5;
  line-height: 1;
  ${props => props.$center ?
          `text-align: center;` : 
            `max-width: 27.2rem;
            margin-bottom: 1rem;`};
  @media screen and (max-width: 481px) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p<{ $center?: boolean }>`
  font-size: 1.5rem;
  color: ${theme.color.white};
  font-family: ${theme.font.babes};
  z-index: 5;
  ${props =>  props.$center ?
          `text-align: center;` :
          `max-width: 27.2rem;`};
  @media screen and (max-width: 481px) {
    font-size: 1.15rem;
  }
`;

export const SectionText = styled.p<{ $center?: boolean }>`
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: ${theme.color.white};
  ${props =>  props.$center ?
          `text-align: center;` :
          `max-width: 27.2rem;`};
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.75rem;
  gap: 0.8rem;
  padding: 0 1rem;
  background: ${theme.color.orangeGradient};
  transition: all 0.3s ease;
  border-radius: 0.3rem;
  &:hover{
    cursor: pointer;
    background: ${theme.color.white};
  }
  @media screen and (max-width: 481px) {
    font-size: 2.75rem;
    padding: 0 0.7rem;
    gap: 0.5rem;
  }
`;

export const ButtonText = styled.span`
font-size: 1rem;
  color: ${theme.color.darkGray};
  font-family: ${theme.font.opensans};
  font-weight: 700;
  
`
export const VerticalDivider = styled.div`
  height: 50%;
  width: 1px;
  background-color: ${theme.color.darkGray};
  opacity: 50%;
`

export const HorisontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${theme.color.lightGray};
`

export const SectionBg = styled(Section)<{ $backgroundImage: string }>`
  position: relative;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
  ${props =>
    props.$backgroundImage &&
    `background-image: url(${props.$backgroundImage});
          background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          `
};
  
`;