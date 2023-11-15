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

const Footer = () => {
    return (

        <FooterContainer>
            <FooterTop>
                <FooterLogo src={logo} alt={'logo'}/>
                <FooterNavItems>
                    <FooterNavItem>MAIN</FooterNavItem>
                    <FooterNavItem>about</FooterNavItem>
                    <FooterNavItem>game features</FooterNavItem>
                    <FooterNavItem>System requirements</FooterNavItem>
                    <FooterNavItem>System requirements</FooterNavItem>
                </FooterNavItems>
                <FooterLogosContainer>
                    <a href="#"><Svg name={'facebook-logo'} fill={theme.color.white} height={'1.5rem'} width={'1.5rem'}
                                     hoverColor={theme.color.lightGray}/></a>
                    <a href="#"> <Svg name={'twitter-logo'} fill={theme.color.white} height={'1.5rem'} width={'1.5rem'}
                                      hoverColor={theme.color.lightGray}/>
                    </a>
                    <a href="#"> <Svg name={'youtube-logo'} fill={theme.color.white} height={'1.5rem'}
                                      width={'1.5rem'}/>
                    </a>
                    <a href="#"> <Svg name={'twitch-logo'} fill={theme.color.white} height={'1.5rem'} width={'1.5rem'}
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
