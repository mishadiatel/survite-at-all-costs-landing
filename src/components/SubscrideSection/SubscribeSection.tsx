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

const SubscribeSection: React.FC = () => {
    return (
        <SubscribeSectionBg>
            <SubscribeContainer>
                <SubscribeImageContainer>
                    <SubscribeImage src={image}/>
                </SubscribeImageContainer>
                <SubscribeSectionContent>
                    <SectionDescription style={{marginBottom: '1rem'}}>Want to stay in touch?</SectionDescription>
                    <SectionTitle>newsletter SUBSCRIBE </SectionTitle>
                    <SectionText style={{marginBottom: '2rem'}}>In order to start receiving our news, all you have to do
                        is enter your email address. Everything else will be taken care of by us. We will send you
                        emails containing information about game. We don’t spam.</SectionText>
                    <SubscribeInputContainer>
                        <InputFieldContainer>
                            <InputSubscribe type={'email'} id={'subscribe'} placeholder={' '}/>
                            <SubscribeLabel htmlFor={'subscribe'}>Your email address</SubscribeLabel>
                        </InputFieldContainer>
                        <Button>
                            <ButtonText>Subscribe now</ButtonText>
                        </Button>
                    </SubscribeInputContainer>

                </SubscribeSectionContent>


            </SubscribeContainer>

        </SubscribeSectionBg>
    );
};

export default SubscribeSection;


