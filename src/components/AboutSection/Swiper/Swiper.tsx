import SwiperCore from 'swiper';
import {
    EffectCards,
    Navigation,
    Pagination,
} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';

import React from 'react';
import {ImgSwiper, ImgSwiperSlide, SwImage} from './Swiper.styled';
import Svg from '../../Svg';
import {theme} from '../../../utils/theme';

// SwiperCore.use([EffectCards, Navigation, Pagination])

interface SwiperProps {
    data: Array<string>;
}

const ImageSwiper: React.FC<SwiperProps> = ({data}) => {
    return (
        <ImgSwiper
            effect={'cards'}
            grabCursor={true}
            modules={[Navigation, Pagination, EffectCards]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            {data.map(el=> (
                <ImgSwiperSlide key={el}>
                    <SwImage src={el} alt={el}/>
                </ImgSwiperSlide>
            ))}

            <Svg name={'arrow-down'} fill={theme.color.white}
                 width={'3rem'} height={'6rem'}
                 hoverColor={theme.color.orange1} style={{zIndex: '5', transform: 'rotate(-90deg)'}}
                 className="swiper-button-next" />
            <Svg name={'arrow-down'} fill={theme.color.white}
                 width={'3rem'} height={'6rem'}
                 hoverColor={theme.color.orange1} style={{zIndex: '5', transform: 'rotate(90deg)'}}
                 className="swiper-button-prev" />
            <div className="swiper-pagination"></div>
        </ImgSwiper>

    );
};

export default ImageSwiper;