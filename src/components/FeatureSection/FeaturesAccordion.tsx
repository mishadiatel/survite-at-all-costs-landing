import React, {useState} from 'react';
import {AccordingsContainer} from './FeaturesAccordion.styled';
import FeaturesAccordionItem from './FeaturesAccordionItem';

const FeaturesAccordion: React.FC = () => {

    const accordions = [
        {
            id: '1',
            title: 'SURVIVE AT ALL COSTS',
            description: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.',
            isOpen: true
        },
        {
            id: '2',
            title: 'CREATE ALLIES AND ENEMIES',
            description: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.',
            isOpen: false
        },
        {
            id: '3',
            title: 'IMPRESS THE AUDIENCE',
            description: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.',
            isOpen: false
        }
    ];

    const [accordionItems, setAccordionItems] = useState(accordions);

    const handleAccordionClick = (id: string) => {

        setAccordionItems(prevState => prevState.map(item => {
            return {...item, isOpen: item.id === id}
        }));

    };

    return (
        <AccordingsContainer>
            {accordionItems.map(el => (
                <FeaturesAccordionItem key={el.id} {...el}
                                       clickHandler={handleAccordionClick}/>
            ))}
        </AccordingsContainer>
    );
};

export default FeaturesAccordion;
