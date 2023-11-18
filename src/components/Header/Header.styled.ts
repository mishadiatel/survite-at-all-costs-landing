import styled from 'styled-components';
import {Container} from '../../App.styled';
import {theme} from '../../utils/theme';

export const NavHeader = styled.header`
  position: fixed;
  transform: translateY(0);
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  transition: all ease 0.5s;
  z-index: 50;

  &.top, &.show {
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
  }

  &.hide {
    transform: translateY(-5rem);
  }
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogo = styled.img`
  height: 3rem;
  width: 3rem;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh + 5rem);
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.transparentBlack};
    z-index: 100;
    transition: transform 0.4s ease;
    &.openMenu {
      transform: translateY(0);
    }

    &.closeMenu {
      transform: translateY(-100%);
    }
    
  }
`
export const Burger = styled.div`
  z-index: 1000;
`

export const NavItem = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: ${theme.font.opensans};
  color: ${theme.color.white};
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.color.orange1};
  }

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`

export const LogosMobileContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const HeaderRight = styled.div`
display: flex;
  gap: 1rem;
`

export const LanguageSelectButton = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1000;
  //&:hover svg {
  //  transform: rotate(180deg);
  //}
`
export const LanguageName = styled.span`
  font-size: 1.25rem;
  font-family: ${theme.font.opensans};
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.color.white};
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.color.orange1};
    cursor: pointer;
  }
`

export const LanguagesContainer = styled.ul<{$show: boolean}>`
display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background-color: ${theme.color.black};
  border-radius: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0.5rem;
  transition: opacity 0.5ms ease, transform 0ms ease 0.5ms;
  z-index: 1000;
  ${props => props.$show ? `
  
  opacity: 1;
  transform: scale(1);
  ` : `
  opacity: 0;
  transform: scale(0)
  `}
`

export const LanguageItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  transition:  background-color 0.3s ease;

  &:hover {
    background-color: ${theme.color.gray};
    cursor: pointer;
  }
  &:hover ${LanguageName} {
    color: ${theme.color.orange1};
  }
`
