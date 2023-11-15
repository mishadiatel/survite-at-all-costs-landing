import styled from 'styled-components';
import {Container} from '../../App.styled';
import {theme} from '../../utils/theme';

export const QuotesSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.34);
`

export const QuotesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 821px) {
    flex-direction: column;
    padding-top: 2rem;
  }
`;

export const QuotesSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0 1 50%;
  margin-bottom: 2rem;
`



export const QuotesSectionBody = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`

