import styled from 'styled-components';
import {Container, SectionBg} from '../../App.styled';

export const RequirementsSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.34);
`

export const RequirementsBg = styled(SectionBg)`
  flex-direction: column;
`

export const RequirementsContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  //@media screen and (max-width: 797px) {
  //  flex-direction: column;
  //}
`;

export const RequirementsSectionContent = styled.div`
  //flex: 0 1 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 36rem;
  //grid-auto-rows: 100px;

`

export const RequirementsHeading = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6.25rem;
  @media screen and (max-width: 481px) {
    padding-top: 2rem;
  }
`
