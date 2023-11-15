import React, {useState} from 'react';
import {LanguageItem, LanguageName, LanguagesContainer, LanguageSelectButton} from './Header.styled';
import Svg from '../Svg';
import {theme} from '../../utils/theme';

const LanguageSelect = () => {
    const languages = ['rus', 'fra', 'deu'];
    const [showLanguages, setShowLanguages] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const handleShowLanguages = () => setShowLanguages(true);
    const handleHideLanguages = () => setShowLanguages(false);
    return (
        <LanguageSelectButton onMouseMove={handleShowLanguages}
                              onMouseLeave={handleHideLanguages}
                              onClick={() => setShowLanguages(prevState => !prevState)}>
            <LanguageName>{currentLanguage}</LanguageName>
            <Svg name={'arrow-down'} fill={theme.color.white} height={'1rem'} width={'1rem'}
                 hoverColor={theme.color.orange1}/>
            <LanguagesContainer $show={showLanguages}>
                {languages.map(el => (
                    <LanguageItem key={el} onClick={() => setCurrentLanguage(el)}>
                        <LanguageName>{el}</LanguageName>
                    </LanguageItem>
                ))}
            </LanguagesContainer>
        </LanguageSelectButton>
    );
};

export default LanguageSelect;
