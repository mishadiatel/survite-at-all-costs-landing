import styled from 'styled-components';
import {theme} from '../../utils/theme';

export const ReqItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 1rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid ${theme.color.lightGray};
`;

export const ReqItemHeading = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.color.orange1};
  font-family: ${theme.font.babes};
`;
export const ReqItemBody = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  font-family: ${theme.font.opensans};
  color: ${theme.color.white};
`;