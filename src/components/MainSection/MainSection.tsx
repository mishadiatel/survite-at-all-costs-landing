import React from 'react';
import bg1 from '../../assets/images/bg-1.webp';
import {
    MainBdGradient,
    MainContainer,
    MainSectionBottom, MainSectionBottomButtonContainer,
    MainSectionBottomText
} from './MainSection.styled';
import {
    Button,
    ButtonText,
    Container,
    SectionBg,
    SectionDescription,
    SectionTitle,
    VerticalDivider
} from '../../App.styled';
import Svg from '../Svg';
import {theme} from '../../utils/theme';

const MainSection = () => {

    return (

        <SectionBg $backgroundImage={bg1}>
            <MainBdGradient/>
            <MainContainer>
                <SectionTitle $center={true} style={{marginBottom: '1rem'}}>SURVIVE AT ALL COSTS</SectionTitle>
                <SectionDescription $center={true} style={{marginBottom: '1rem'}}>Experience new social battle royale game</SectionDescription>
                <Button>
                    <ButtonText>Buy Now on Steam</ButtonText>
                    <VerticalDivider/>
                    <ButtonText>$14.99</ButtonText>
                </Button>
                <MainSectionBottom>
                    <MainSectionBottomButtonContainer>
                        <MainSectionBottomText>The story</MainSectionBottomText>
                        <Svg name={'arrow-down'} fill={theme.color.white} height={'1rem'} width={'2rem'} />
                    </MainSectionBottomButtonContainer>

                </MainSectionBottom>
            </MainContainer>

        </SectionBg>


    );
};

export default MainSection;
