import React, {useState} from 'react';
import {LanguageItem, LanguageName, LanguagesContainer, LanguageSelectButton} from './Header.styled';
import Svg from '../Svg';
import {theme} from '../../utils/theme';
import {useTranslation} from 'react-i18next';
import {languageList} from '../../locales/i18n';

const LanguageSelect = () => {
    const { i18n} = useTranslation();
    const languages = languageList;
    const [showLanguages, setShowLanguages] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const handleShowLanguages = () => setShowLanguages(true);
    const handleHideLanguages = () => setShowLanguages(false);

    const changeLanguageHandler = (language: string) => {
        setCurrentLanguage(language)
        i18n.changeLanguage(language);
        localStorage.setItem('lng', language)
    }

    return (
        <LanguageSelectButton onMouseMove={handleShowLanguages}
                              onMouseLeave={handleHideLanguages}
                              onClick={() => setShowLanguages(prevState => !prevState)}>
            <LanguageName>{currentLanguage}</LanguageName>
            <Svg name={'arrow-down'} fill={theme.color.white} height={'1rem'} width={'1rem'}
                 hoverColor={theme.color.orange1}/>
            <LanguagesContainer $show={showLanguages}>
                {languages.map(language => (
                    <LanguageItem key={language} onClick={changeLanguageHandler.bind(null, language)}>
                        <LanguageName>{language}</LanguageName>
                    </LanguageItem>
                ))}
            </LanguagesContainer>
        </LanguageSelectButton>
    );
};

export default LanguageSelect;
