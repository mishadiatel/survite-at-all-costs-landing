import styled from 'styled-components';
import {Container} from '../../App.styled';
import {theme} from '../../utils/theme';

export const AboutSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.64);
`

export const AboutContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 821px) {
    flex-direction: column;
    padding-top: 2rem;
  }
`;

export const AboutSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 50%;
`



export const AboutSectionSwiper = styled.div`
  flex: 0 1 50%;
`

