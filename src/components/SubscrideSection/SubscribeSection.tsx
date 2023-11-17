import React from 'react';
import {Button, ButtonText, SectionDescription, SectionText, SectionTitle} from '../../App.styled';
import image from '../../assets/images/scull.webp';
import {
    InputFieldContainer,
    InputSubscribe,
    SubscribeContainer,
    SubscribeImage,
    SubscribeImageContainer,
    SubscribeInputContainer,
    SubscribeLabel,
    SubscribeSectionBg,
    SubscribeSectionContent
} from './SubscribeSection.styled';
import {useTranslation} from 'react-i18next';

const SubscribeSection: React.FC = () => {
    const {t} = useTranslation();
    return (
        <SubscribeSectionBg>
            <SubscribeContainer>
                <SubscribeImageContainer>
                    <SubscribeImage src={image}/>
                </SubscribeImageContainer>
                <SubscribeSectionContent>
                    <SectionDescription
                        style={{marginBottom: '1rem'}}>{t('subscribeSectionDescription')}</SectionDescription>
                    <SectionTitle>{t('subscribeSectionTitle')}</SectionTitle>
                    <SectionText style={{marginBottom: '2rem'}}>{t('subscribeSectionText')}</SectionText>
                    <SubscribeInputContainer>
                        <InputFieldContainer>
                            <InputSubscribe type={'email'} id={'subscribe'} placeholder={' '}/>
                            <SubscribeLabel htmlFor={'subscribe'}>{t('subscribeSectionInputLabel')}</SubscribeLabel>
                        </InputFieldContainer>
                        <Button>
                            <ButtonText>{t('subscribeSectionButtonText')}</ButtonText>
                        </Button>
                    </SubscribeInputContainer>

                </SubscribeSectionContent>


            </SubscribeContainer>

        </SubscribeSectionBg>
    );
};

export default SubscribeSection;


