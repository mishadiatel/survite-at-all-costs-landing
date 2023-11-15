import styled, {keyframes} from 'styled-components';
import {Container} from '../../App.styled';
import {theme} from '../../utils/theme';

const movingAnimation = keyframes`
  0%{
    transform: translateY(0rem) scale(1);
  }
  80%{
    transform: translateY(1rem) scale(1.3);
  }
  100%{
    transform: translateY(0rem) scale(1);
  }
`

export const MainBdGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${theme.color.mainSectionGradient};
`

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainSectionBottomText = styled.span`
  font-size: 1.5rem;
  color: ${theme.color.white};
  line-height: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  @media screen and (max-height: 413px) {
    font-size: 0.75rem;
  }
  
`
export const MainSectionBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3.125rem;
  left: 0;
  width: 100%;
  @media screen and (max-height: 413px) {
    bottom: 2rem;
  }
  
`

export const MainSectionBottomButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  align-items: center;
  & svg {
    animation: ${movingAnimation} 2s infinite;
  }
  &:hover {
    cursor: pointer;
    & ${MainSectionBottomText} {
      color: ${theme.color.orange1};
    }
    & svg use {
      fill: ${theme.color.orange1};
    }
  }
`
