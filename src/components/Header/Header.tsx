import React, {useEffect, useState} from 'react';
import {
    Burger,
    HeaderContainer,
    HeaderLogo,
    HeaderRight,
    LogosMobileContainer,
    NavBar,
    NavHeader,
    NavItem
} from './Header.styled';
import logo from '../../assets/images/logo.png';
import Svg from '../Svg';
import {theme} from '../../utils/theme';
import LanguageSelect from './LanguageSelect';
import {Link} from 'react-scroll';
import {scrollOptions} from '../../utils/scrollOptions';
import {useTranslation} from 'react-i18next';

const Header: React.FC = () => {
    const {t} = useTranslation()
    const [show, setShow] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY /*&& !mobileMenu*/) {
                setShow('hide');
            } else {
                setShow('show');
            }
        } else {
            setShow('top');
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const blockScroll = () => {
        document.body.style.overflow = !openBurgerMenu ? 'hidden' : 'visible';
    };
    const toggleBurgerMenu = () => {
        setOpenBurgerMenu(prevState => !prevState);
        openBurgerMenu && setShow('show');
        blockScroll();
    };
    const content = screenWidth > 800 ?
        (
            <>
                <HeaderLogo src={logo}/>
                <NavBar>
                    <Link to={'main'} {...scrollOptions}>
                        <NavItem>{t('navItemMain')}</NavItem>

                    </Link>
                    <Link to={'about'} {...scrollOptions}>
                        <NavItem>{t('navItemAbout')}</NavItem>
                    </Link>

                    <Link to={'features'} {...scrollOptions}>
                        <NavItem>{t('navItemFeatures')}</NavItem>
                    </Link>

                    <Link to={'requirements'} {...scrollOptions}>
                        <NavItem>{t('navItemRequirements')}</NavItem>
                    </Link>

                    <Link to={'quotes'} {...scrollOptions}>
                        <NavItem>{t('navItemQuotes')}</NavItem>
                    </Link>

                </NavBar>
                <HeaderRight>
                    <LanguageSelect/>
                    <a href="https://www.xbox.com">
                        <Svg name={'xbox-logo'} fill={theme.color.orange1}
                             height={'2rem'} width={'2rem'}
                             hoverColor={theme.color.white}/>
                    </a>
                    <a href="'https://store.steampowered.com/app/1372880/The_Day_Before/">
                        <Svg name={'steam-logo'} fill={theme.color.orange1}
                             height={'2rem'} width={'2rem'}
                             hoverColor={theme.color.white}/>
                    </a>
                </HeaderRight>
            </>
        ) :
        (
            <>
                <HeaderLogo src={logo}/>
                <NavBar className={openBurgerMenu ? 'openMenu' : 'closeMenu'}>
                    <Link to={'main'} {...scrollOptions}>
                        <NavItem onClick={toggleBurgerMenu}>{t('navItemMain')}</NavItem>
                    </Link>
                    <Link to={'about'} {...scrollOptions}>
                        <NavItem onClick={toggleBurgerMenu}>{t('navItemAbout')}</NavItem>
                    </Link>
                    <Link to={'features'} {...scrollOptions}>
                        <NavItem onClick={toggleBurgerMenu}>{t('navItemFeatures')}</NavItem>
                    </Link>
                    <Link to={'requirements'} {...scrollOptions}>
                        <NavItem onClick={toggleBurgerMenu}>{t('navItemRequirements')}</NavItem>
                    </Link>
                    <Link to={'quotes'} {...scrollOptions}>
                        <NavItem onClick={toggleBurgerMenu}>{t('navItemQuotes')}</NavItem>
                    </Link>

                    <LogosMobileContainer>
                        <a href="https://www.xbox.com" onClick={toggleBurgerMenu}>
                            <Svg name={'xbox-logo'} fill={theme.color.orange1}
                                 height={'2rem'} width={'2rem'}
                                 hoverColor={theme.color.white}/>
                        </a>
                        <a href="'https://store.steampowered.com/app/1372880/The_Day_Before/" onClick={toggleBurgerMenu}>
                            <Svg name={'steam-logo'} fill={theme.color.orange1}
                                 height={'2rem'} width={'2rem'}
                                 hoverColor={theme.color.white}/>
                        </a>
                    </LogosMobileContainer>
                </NavBar>
                <HeaderRight>
                    <LanguageSelect/>
                    <Burger onClick={toggleBurgerMenu}>
                        <Svg name={'burger'} fill={theme.color.white} height={'1.5rem'} width={'1.5rem'}/>
                    </Burger>

                </HeaderRight>
            </>
        );

    return (
        <>
            <NavHeader className={show}>
                <HeaderContainer>
                    {content}
                </HeaderContainer>
            </NavHeader>
        </>
    );
};

export default Header;
