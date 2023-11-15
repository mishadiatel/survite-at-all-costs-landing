import React from 'react';
import bg1 from '../../assets/images/bg-1.webp';
import bg2 from '../../assets/images/bg-2.webp';
import bg3 from '../../assets/images/bg-3.webp';
import bg4 from '../../assets/images/bg-4.webp';
import {
    MainBdGradient,
    MainContainer,
    MainSectionBottom,
    MainSectionBottomButtonContainer,
    MainSectionBottomText
} from './MainSection.styled';
import {Button, ButtonText, SectionBg, SectionDescription, SectionTitle, VerticalDivider} from '../../App.styled';
import Svg from '../Svg';
import {theme} from '../../utils/theme';
import useBackgroundChange from '../../hooks/useBackgroundChange';
import {Element, Link} from 'react-scroll';
import {scrollOptions} from '../../utils/scrollOptions';

const MainSection = () => {
    const bgArray = [bg1, bg2, bg3, bg4];
    const background = useBackgroundChange(bgArray);

    return (
        <Element name={'main'} >
            <SectionBg $backgroundImage={background}>
                <MainBdGradient/>
                <MainContainer>
                    <SectionTitle $center={true} style={{marginBottom: '1rem'}}>SURVIVE AT ALL COSTS</SectionTitle>
                    <SectionDescription $center={true} style={{marginBottom: '1rem'}}>Experience new social battle royale
                        game</SectionDescription>
                    <Button href={'https://store.steampowered.com/app/1372880/The_Day_Before/'}>
                        <ButtonText>Buy Now on Steam</ButtonText>
                        <VerticalDivider/>
                        <ButtonText>$14.99</ButtonText>
                    </Button>
                    <MainSectionBottom>
                        <Link to={'about'} {...scrollOptions}>
                            <MainSectionBottomButtonContainer>
                                <MainSectionBottomText>The story</MainSectionBottomText>
                                <Svg name={'arrow-down'} fill={theme.color.white} height={'1rem'} width={'2rem'}/>
                            </MainSectionBottomButtonContainer>
                        </Link>
                    </MainSectionBottom>
                </MainContainer>

            </SectionBg>
        </Element>



    );
};

export default MainSection;
