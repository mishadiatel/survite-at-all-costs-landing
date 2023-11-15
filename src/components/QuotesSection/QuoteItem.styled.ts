import styled from 'styled-components';
import {theme} from '../../utils/theme';

export const QtCard = styled.article`
  background-color: ${theme.color.gray};
  border-radius: 0.625rem;
padding: 1rem 1rem 1.5rem;
  display: flex;
  width: 80%;
  max-width: 28.3rem;
  @media screen and (max-width: 481px) {
    width: 100%;

  }
  
`

export const QtCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 0.5rem;
  
`


export const QtCardHeading = styled.div`
display: flex;
  gap: 1rem;
  
`

export const QtCardImage = styled.img`
  border-radius: 50%;
  width: 3.8rem;
  height: 3.8rem;
`

export const QtCardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
`

export const QtCardName = styled.span`
  font-family: ${theme.font.babes};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.125rem;
  color: ${theme.color.orange1};
  @media screen and (max-width: 481px) {
    font-size: 1.3125rem;

  }
  
`

export const QtCardProfession = styled.span`
  font-family: ${theme.font.opensans};
  font-weight: 400;
  font-size: 1.125rem;
  color: ${theme.color.lightGray};
  @media screen and (max-width: 481px) {
    font-size: 0.875rem;

  }
  
`

export const QtCardQuote = styled.p`
  color: ${theme.color.white};
  font-family: ${theme.font.opensans};
  font-weight: 400;
  font-size: 1.125rem;
  max-width: 24.3rem;
  @media screen and (max-width: 481px) {
    font-size: 0.875rem;

  }
`

export const QtCardDate = styled.span`
  color: ${theme.color.lightGray};
  font-family: ${theme.font.opensans};
  font-weight: 400;
  font-size: 0.875rem;
  @media screen and (max-width: 481px) {
    font-size: 0.75rem;

  }
`


export const QtCardSocialLogo = styled.div`
  align-self: flex-start;
`