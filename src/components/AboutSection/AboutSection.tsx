import React from 'react';
import bg1 from '../../assets/images/bg-1.webp';
import bg2 from '../../assets/images/bg-2.webp';
import bg4 from '../../assets/images/bg-4.webp';
import {SectionBg, SectionDescription, SectionText, SectionTitle} from '../../App.styled';
import {AboutContainer, AboutSectionBg, AboutSectionContent, AboutSectionSwiper} from './AboutSection.styled';
import useBackgroundChange from '../../hooks/useBackgroundChange';
import {Element} from 'react-scroll';

const AboutSection = () => {
    const bgArray = [bg4, bg1, bg2];
    const background = useBackgroundChange(bgArray);

    return (
        <Element name={'about'}>
            <SectionBg $backgroundImage={background}>
                <AboutSectionBg/>
                <AboutContainer>
                    <AboutSectionContent>
                        <SectionDescription style={{marginBottom: '1rem'}}>What is SOS?</SectionDescription>
                        <SectionTitle>social battle royale game</SectionTitle>
                        <SectionText>Our goal is to create a product and service that you’re satisfied with and use it every
                            day. This is why we’re constantly working on our services to make it better every day and really
                            listen to what our users has to say.</SectionText>
                    </AboutSectionContent>
                    <AboutSectionSwiper>

                    </AboutSectionSwiper>

                </AboutContainer>

            </SectionBg>
        </Element>


    );
};

export default AboutSection;
