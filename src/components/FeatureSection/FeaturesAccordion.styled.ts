import styled from 'styled-components';
import {theme} from '../../utils/theme';

export const AccordingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 30rem;
`;

export const AccordionItemContainer = styled.div`
  display: flex;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const AccordionRingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.5rem;
`;

export const AccordionActiveLine = styled.div`
  flex: 1;
  width: 2px;
  background-color: ${theme.color.white};

`;

export const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccordionItemTitle = styled.span`
  color: ${theme.color.orange1};
  font-weight: 700;
  font-family: ${theme.font.babes};
  font-size: 2.25rem;
  letter-spacing: 0.125rem;
`;

export const AccordionItemDescription = styled.p`
  color: ${theme.color.white};
  font-family: ${theme.font.opensans};
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.22;
`;



