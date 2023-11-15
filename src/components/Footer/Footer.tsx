import React from 'react';
import {
    FooterBottom,
    FooterContainer,
    FooterLogo,
    FooterLogosContainer,
    FooterNavItem,
    FooterNavItems,
    FooterRightItem,
    FooterRightItems,
    FooterRightsText,
    FooterTop
} from './Footer.styled';
import {HorisontalDivider} from '../../App.styled';
import logo from '../../assets/images/logo.png';
import Svg from '../Svg';
import {theme} from '../../utils/theme';
import {Link} from 'react-scroll';
import {scrollOptions} from '../../utils/scrollOptions';

const Footer = () => {

    return (

        <FooterContainer>
            <FooterTop>
                <FooterLogo src={logo} alt={'logo'}/>
                <FooterNavItems>
                    <Link to={'main'} {...scrollOptions} >
                        <FooterNavItem>MAIN</FooterNavItem>
                    </Link>
                    <Link to={'about'} {...scrollOptions} >
                        <FooterNavItem>about</FooterNavItem>
                    </Link>
                    <Link to={'features'} {...scrollOptions} >
                        <FooterNavItem>game features</FooterNavItem>
                    </Link>
                    <Link to={'requirements'} {...scrollOptions} >
                        <FooterNavItem>System requirements</FooterNavItem>
                    </Link>
                    <Link to={'quotes'} {...scrollOptions} >
                        <FooterNavItem>quotes</FooterNavItem>
                    </Link>

                </FooterNavItems>
                <FooterLogosContainer>
                    <a href="https://facebook.com">
                        <Svg name={'facebook-logo'} fill={theme.color.white}
                             height={'1.5rem'} width={'1.5rem'}
                             hoverColor={theme.color.lightGray}/></a>
                    <a href="https://twitter.com">
                        <Svg name={'twitter-logo'} fill={theme.color.white} height={'1.5rem'}
                             width={'1.5rem'}
                             hoverColor={theme.color.lightGray}/>
                    </a>
                    <a href="https://youtube.com">
                        <Svg name={'youtube-logo'} fill={theme.color.white} height={'1.5rem'}
                             width={'1.5rem'}/>
                    </a>
                    <a href="https://twitch.com">
                        <Svg name={'twitch-logo'} fill={theme.color.white} height={'1.5rem'}
                             width={'1.5rem'}
                             hoverColor={theme.color.lightGray}/>
                    </a>

                </FooterLogosContainer>
            </FooterTop>
            <HorisontalDivider>

            </HorisontalDivider>
            <FooterBottom>
                <FooterRightsText> © 2018 Outpost Games, Inc. All Rights Reserved</FooterRightsText>

                <FooterRightItems>
                    <FooterRightItem>Privacy Policy</FooterRightItem>
                    <FooterRightItem>Terms of Services</FooterRightItem>
                    <FooterRightItem>Code of Conduct</FooterRightItem>
                </FooterRightItems>

            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
