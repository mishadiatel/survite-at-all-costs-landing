import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {theme} from '../../../utils/theme';

export const ImgSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 38rem;
  max-width: 30rem;
  @media screen and (max-width: 821px) {
    max-width: 90vw;
  }

  & .swiper-pagination {
    & .swiper-pagination-bullet {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: transparent;
      border: 2px solid ${theme.color.orange1};
      transition: background-color 0.3s ease;
      &:hover {
        background-color: ${theme.color.orange1};
        opacity: 1;
      }
      &.swiper-pagination-bullet-active {
        background-color: ${theme.color.orange1};
      }
    }
  }
`

export const ImgSwiperSlide = styled(SwiperSlide)`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid ${theme.color.orange1};
`

export const SwImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

`;