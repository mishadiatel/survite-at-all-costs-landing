import styled from 'styled-components';
import {Container} from '../../App.styled';

export const AboutSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.64);
`;

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
  margin-bottom: 2rem;
  @media screen and (max-width: 481px) {
    flex: 0 1 auto;
  }
`;

export const AboutSectionSwiper = styled.div`
  flex: 0 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 80%;
  max-height: 80vh;
  margin-bottom: 2rem;
`;



