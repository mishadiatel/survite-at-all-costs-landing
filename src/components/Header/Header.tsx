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

const Header: React.FC = () => {
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
        document.body.style.overflow = !openBurgerMenu ? 'hidden' : 'visible'
    }
    const toggleBurgerMenu = () => {
        setOpenBurgerMenu(prevState => !prevState);
        openBurgerMenu && setShow('show')
        blockScroll()
    }

    const content = screenWidth > 800 ?
        (
            <>
                <HeaderLogo src={logo}/>
                <NavBar>
                    <NavItem>MAIN</NavItem>
                    <NavItem>about</NavItem>
                    <NavItem>game features</NavItem>
                    <NavItem>System requirements</NavItem>
                    <NavItem>quotes</NavItem>
                </NavBar>
                <HeaderRight>
                    <LanguageSelect/>
                    <a href="#">
                        <Svg name={'xbox-logo'} fill={theme.color.orange1}
                             height={'2rem'} width={'2rem'}
                             hoverColor={theme.color.white}/>
                    </a>
                    <a href="#">
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
                    <NavItem onClick={toggleBurgerMenu}>MAIN</NavItem>
                    <NavItem onClick={toggleBurgerMenu}>about</NavItem>
                    <NavItem onClick={toggleBurgerMenu}>game features</NavItem>
                    <NavItem onClick={toggleBurgerMenu}>System requirements</NavItem>
                    <NavItem onClick={toggleBurgerMenu}>quotes</NavItem>
                    <LogosMobileContainer>
                        <a href="#" onClick={toggleBurgerMenu}>
                            <Svg name={'xbox-logo'} fill={theme.color.orange1}
                                 height={'2rem'} width={'2rem'}
                                 hoverColor={theme.color.white}/>
                        </a>
                        <a href="#" onClick={toggleBurgerMenu}>
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
