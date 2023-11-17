import React, {useState} from 'react';
import {AccordingsContainer} from './FeaturesAccordion.styled';
import FeaturesAccordionItem from './FeaturesAccordionItem';
import {useTranslation} from 'react-i18next';

const FeaturesAccordion: React.FC = () => {
    const {t} = useTranslation();

    const accordions = [
        {
            id: '1',
            title: 'feature1Title',
            description: 'feature1Description',
            isOpen: true
        },
        {
            id: '2',
            title: 'feature2Title',
            description: 'feature2Description',
            isOpen: false
        },
        {
            id: '3',
            title: 'feature3Title',
            description: 'feature3Description',
            isOpen: false
        }
    ];

    const [accordionItems, setAccordionItems] = useState(accordions);

    const handleAccordionClick = (id: string) => {

        setAccordionItems(prevState => prevState.map(item => {
            return {...item, isOpen: item.id === id};
        }));

    };

    return (
        <AccordingsContainer>
            {accordionItems.map(el => (
                <FeaturesAccordionItem key={el.id} id={el.id} title={t(el.title)} description={t(el.description)}
                                       isOpen={el.isOpen}
                                       clickHandler={handleAccordionClick}/>
            ))}
        </AccordingsContainer>
    );
};

export default FeaturesAccordion;
