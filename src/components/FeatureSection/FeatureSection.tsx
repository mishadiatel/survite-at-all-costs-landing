import React from 'react';
import bg3 from '../../assets/images/bg-3.webp';
import {SectionBg, SectionDescription, SectionTitle} from '../../App.styled';
import {FeatureContainer, FeatureSectionBg, FeatureSectionContent} from './FeatureSection.styled';
import FeaturesAccordion from './FeaturesAccordion';
import {Element} from 'react-scroll';
import {useTranslation} from 'react-i18next';

const FeatureSection = () => {
    const {t} = useTranslation();
    return (
        <Element name={'features'}>
            <SectionBg $backgroundImage={bg3}>
                <FeatureSectionBg/>

                <FeatureContainer>
                    {/*<EmptyPlace />*/}
                    <FeatureSectionContent>
                        <SectionDescription
                            style={{marginBottom: '1rem'}}>{t('featuresSectionDescription')}</SectionDescription>
                        <SectionTitle style={{marginBottom: '1.5rem'}}>{t('featuresSectionTitle')}</SectionTitle>
                        <FeaturesAccordion/>
                    </FeatureSectionContent>


                </FeatureContainer>

            </SectionBg>
        </Element>

    );
};

export default FeatureSection;
