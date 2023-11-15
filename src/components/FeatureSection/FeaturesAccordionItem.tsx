import React from 'react';
import {
    AccordionActiveLine,
    AccordionItemContainer,
    AccordionItemContent,
    AccordionItemDescription,
    AccordionItemTitle, AccordionRingContainer
} from './FeaturesAccordion.styled';
import Svg from '../Svg';
import {theme} from '../../utils/theme';

interface IAccordionItem {
    id: string;
    title: string;
    description: string;
    isOpen: boolean;
    clickHandler: (id: string) => void;
}

const FeaturesAccordionItem: React.FC<IAccordionItem> = ({id,title, description, isOpen, clickHandler}) => {

    return (
        <AccordionItemContainer onClick={clickHandler.bind(null, id)}>
            <AccordionRingContainer>
                <Svg name={isOpen ? 'full-ring' : 'empty-ring'} fill={theme.color.white} height={'16'} width={'17'} />
                <AccordionActiveLine />
            </AccordionRingContainer>

            <AccordionItemContent>
                <AccordionItemTitle>{title}</AccordionItemTitle>
                <AccordionItemDescription
                    className={isOpen ? 'showAccordion' : 'hideAccordion'}
                >{description}</AccordionItemDescription>
            </AccordionItemContent>

        </AccordionItemContainer>
    );
};

export default FeaturesAccordionItem;
