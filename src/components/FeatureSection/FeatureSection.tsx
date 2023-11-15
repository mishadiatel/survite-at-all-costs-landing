import React from 'react';
import bg3 from '../../assets/images/bg-3.webp';
import {Container, SectionBg, SectionDescription, SectionTitle} from '../../App.styled';
import {FeatureContainer, FeatureSectionBg, FeatureSectionContent} from './FeatureSection.styled';
import FeaturesAccordion from './FeaturesAccordion';

const FeatureSection = () => {
    return (
        <SectionBg $backgroundImage={bg3}>
            <FeatureSectionBg/>

            <FeatureContainer>
                {/*<EmptyPlace />*/}
                <FeatureSectionContent>

                    <SectionDescription style={{marginBottom: '1rem'}}>What’s so special?</SectionDescription>
                    <SectionTitle style={{marginBottom: '1.5rem'}}>features</SectionTitle>
                    <FeaturesAccordion />
                </FeatureSectionContent>


            </FeatureContainer>

        </SectionBg>
    );
};

export default FeatureSection;
