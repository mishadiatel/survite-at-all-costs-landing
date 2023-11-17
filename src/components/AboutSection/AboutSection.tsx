import React from 'react';
import bg1 from '../../assets/images/bg-1.webp';
import bg2 from '../../assets/images/bg-2.webp';
import bg3 from '../../assets/images/bg-3.webp';
import bg4 from '../../assets/images/bg-4.webp';
import {SectionBg, SectionDescription, SectionText, SectionTitle} from '../../App.styled';
import {AboutContainer, AboutSectionBg, AboutSectionContent, AboutSectionSwiper} from './AboutSection.styled';
import useBackgroundChange from '../../hooks/useBackgroundChange';
import {Element} from 'react-scroll';

import ImageSwiper from './Swiper/Swiper';
import {useTranslation} from 'react-i18next';


const AboutSection: React.FC = () => {
    const {t} = useTranslation();
    const bgArray = [bg4, bg1, bg3, bg2];
    const background = useBackgroundChange(bgArray);

    return (
        <Element name={'about'}>
            <SectionBg $backgroundImage={background}>
                <AboutSectionBg/>
                <AboutContainer>
                    <AboutSectionContent>
                        <SectionDescription
                            style={{marginBottom: '1rem'}}>{t('aboutSectionDescription')}</SectionDescription>
                        <SectionTitle>{t('aboutSectionTitle')}</SectionTitle>
                        <SectionText>{t('aboutSectionText')}</SectionText>
                    </AboutSectionContent>
                    <AboutSectionSwiper>
                        <ImageSwiper data={bgArray}/>
                    </AboutSectionSwiper>

                </AboutContainer>

            </SectionBg>
        </Element>


    );
};

export default AboutSection;
