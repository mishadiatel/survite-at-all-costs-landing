import translationEng from './eng/translation';
import translationRus from './rus/translation';
import translationFra from './fra/translation';
import translationDeu from './deu/translation';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

export const languageList = ['eng', /*'rus',*/ 'fra', 'deu'];

const resources = {
    eng: {
        translation: translationEng
    },
    // rus: {
    //     translation: translationRus
    // },
    fra: {
        translation: translationFra
    },
    deu: {
        translation: translationDeu
    }

};
// console.log(resources)

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lng') || 'eng',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }

    });

export default i18next;
