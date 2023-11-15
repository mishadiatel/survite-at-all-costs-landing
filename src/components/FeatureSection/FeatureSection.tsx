import React from 'react';
import bg3 from '../../assets/images/bg-3.webp';
import {
    AboutContainer,
    AboutSectionBg,
    AboutSectionContent,
    AboutSectionSwiper
} from '../AboutSection/AboutSection.styled';
import {Container, SectionBg, SectionDescription, SectionTitle} from '../../App.styled';
import {FeatureContainer, FeatureSectionBg, FeatureSectionContent} from './FeatureSection.styled';

const FeatureSection = () => {
    return (
        <SectionBg $backgroundImage={bg3}>
            <FeatureSectionBg/>

            <FeatureContainer>
                {/*<EmptyPlace />*/}
                <FeatureSectionContent>

                    <SectionDescription style={{marginBottom: '1rem'}}>What’s so special?</SectionDescription>
                    <SectionTitle style={{marginBottom: '1.5rem'}}>features</SectionTitle>

                </FeatureSectionContent>


            </FeatureContainer>

        </SectionBg>
    );
};

export default FeatureSection;
