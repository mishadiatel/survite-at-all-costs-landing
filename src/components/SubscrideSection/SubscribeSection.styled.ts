import styled from 'styled-components';
import {Container} from '../../App.styled';
import {theme} from '../../utils/theme';

export const SubscribeSectionBg = styled.div`
  position: relative;
  

`

export const SubscribeContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.black};
  @media screen and (max-width: 821px) {
    //flex-direction: column;
    padding-top: 2rem;
  }
`;
export const SubscribeImageContainer = styled.div`
  flex: 1 1 auto;
  //overflow: hidden;
  @media screen and (max-width: 821px) {
    position: absolute;
  }
`
export const SubscribeImage = styled.img`
max-width: 100%`;

export const SubscribeSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 1 50%;
  margin-bottom: 2rem;
  background-color: transparent;
  z-index: 5;
`

export const SubscribeInputContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  z-index: 5;
  & > * {
    flex: 0 1 50%;
    
  }

  @media screen and (max-width: 821px) {

    flex-direction: column;
    & > * {
      width: 100%;
      min-height: 3.75rem;

    }
  }
`

export const InputFieldContainer = styled.div`
  position: relative;
  background-color: ${theme.color.gray};
  width: 100%;
  min-width: 12.1875rem;
  height: 3.75rem;

`
export const SubscribeLabel = styled.label`
  font-size: 1.125rem;
  position: absolute;
  top: 50%;
  left: 1rem;
  //width: 100%;
  transform: translateY(-50%);
  font-weight: 400;
  //height: 100%;
  transition: all 0.3s ease;  
  color: ${theme.color.lightGray};
  font-family: ${theme.font.opensans};
`

export const InputSubscribe = styled.input`
  background-color: transparent;
  position: absolute;
  padding: 0.7rem 1rem 0.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${theme.color.orange1};
  font-family: ${theme.font.opensans};
  border: none;
  outline: none;
  font-size: 1.125rem;
  

  &:focus{
    //outline: none;
    //background-color: rgba(143, 251, 2, 0.085);

  }
  //&:focus ~ .popup-test__line{
  //  transform: scale(1);
  //}
  &:focus~${SubscribeLabel},
  &:not(:placeholder-shown)~${SubscribeLabel}{
    transform: translate(-1rem ,-140%) scale(0.7);
  }
`






