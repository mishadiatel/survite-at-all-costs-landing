import styled from 'styled-components';
import {Container} from '../../App.styled';
import {theme} from '../../utils/theme';

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;
  z-index: 6;
  //@media screen and (max-width: 821px) {
  //  
  //  padding-top: 2rem;
  //}
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  @media screen and (max-width: 821px) {
    flex-direction: column;
  }
`
export const FooterLogo = styled.img`
  width: 5.625rem;
  height: 5.625rem;
  z-index: 6;
`
export const FooterNavItems = styled.div`
display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 490px) {
    flex-wrap: wrap;
    //justify-content: center;
  }
`

export const FooterNavItem = styled.a`
  font-size: 0.75rem;
  color: ${theme.color.white};
  font-family: ${theme.font.opensans};
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.color.lightGray};
    cursor: pointer;
  }
`

export const FooterLogosContainer = styled.div`
display: flex;
  align-items: center;
  gap: 2rem;
`

export const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const FooterRightsText = styled.p`
font-size: 0.875rem;
  color: ${theme.color.lightGray};
  font-family: ${theme.font.opensans};
  font-weight: 400;
`

export const FooterRightItems = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 490px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterRightItem = styled.a`
  color: ${theme.color.white};
  font-family: ${theme.font.opensans};
  font-weight: 700;
  font-size: 0.75rem;
`