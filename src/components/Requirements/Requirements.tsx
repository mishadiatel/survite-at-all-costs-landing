import React from 'react';
import bg4 from '../../assets/images/bg-4.webp';
import {SectionDescription, SectionTitle} from '../../App.styled';
import {
    RequirementsBg,
    RequirementsContainer,
    RequirementsHeading,
    RequirementsSectionBg,
    RequirementsSectionContent
} from './Requirements.styled';
import RequirementItem from './RequirementItem';
import {Element} from 'react-scroll';
import {useTranslation} from 'react-i18next';

const RequirementsSection = () => {
    const {t} = useTranslation();
    return (
        <Element name={'requirements'}>
            <RequirementsBg $backgroundImage={bg4}>
                <RequirementsSectionBg/>
                <RequirementsHeading>
                    <SectionDescription $center={true}
                                        style={{marginBottom: '1rem'}}>{t('requirementsSectionDescription')}</SectionDescription>
                    <SectionTitle $center={true}
                                  style={{marginBottom: '1.5rem'}}>{t('requirementsSectionTitle')}</SectionTitle>
                </RequirementsHeading>

                <RequirementsContainer>
                    <RequirementsSectionContent>
                        <RequirementItem heading={t('reqItem1Name')} body={t('reqItem1Body')}/>
                        <RequirementItem heading={t('reqItem2Name')} body={t('reqItem2Body')}/>
                        <RequirementItem heading={t('reqItem3Name')} body={t('reqItem3Body')}/>
                        <RequirementItem heading={t('reqItem4Name')} body={t('reqItem4Body')}/>
                        <RequirementItem heading={t('reqItem5Name')} body={t('reqItem5Body')}
                                         isLast={true}/>
                    </RequirementsSectionContent>
                    {/*<EmptyPlace/>*/}

                </RequirementsContainer>

            </RequirementsBg>
        </Element>

    );
};

export default RequirementsSection;
