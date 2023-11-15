import React from 'react';
import bg2 from '../../assets/images/bg-2.webp';
import {SectionBg, SectionDescription, SectionText, SectionTitle} from '../../App.styled';
import {AboutContainer, AboutSectionBg, AboutSectionContent, AboutSectionSwiper} from './AboutSection.styled';

const AboutSection = () => {
    return (
        <SectionBg $backgroundImage={bg2}>
            <AboutSectionBg/>
            <AboutContainer>
                <AboutSectionContent>
                    <SectionDescription style={{marginBottom: '1rem'}}>What is SOS?</SectionDescription>
                    <SectionTitle>social battle royale game</SectionTitle>
                    <SectionText >Our goal is to create a product and service that you’re satisfied with and use it every
                        day. This is why we’re constantly working on our services to make it better every day and really
                        listen to what our users has to say.</SectionText>
                </AboutSectionContent>
                <AboutSectionSwiper>

                </AboutSectionSwiper>

            </AboutContainer>

        </SectionBg>

    );
};

export default AboutSection;
