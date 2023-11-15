import React from 'react';
import bg5 from '../../assets/images/bg-5.jpg';
import {Button, ButtonText, SectionBg, SectionDescription, SectionText, SectionTitle} from '../../App.styled';
import {QuotesContainer, QuotesSectionBg, QuotesSectionBody, QuotesSectionContent} from './QuotesSection.styled';

import evanphoto from '../../assets/images/evan.jpg';
import jadaphoto from '../../assets/images/jada.jpg';
import aaronphoto from '../../assets/images/aaron.jpg';
import QuoteItem from './QuoteItem';
import {Element} from 'react-scroll';

const quotesArray = [
    {
        id: 1,
        name: 'Evan Lanti',
        profession: 'PC Gamer',
        quote: `“One of my gaming highlights of the year.”`,
        date: new Date('2018-10-18'),
        photo: evanphoto,
        link: 'https://twitter.com'
    },
    {
        id: 2,
        name: 'Jada Griffin ',
        profession: 'Nerdreactor',
        quote: `“The next big thing in the world of streaming and survival games.”`,
        date: new Date('2018-12-21'),
        photo: jadaphoto,
        link: 'https://twitter.com'
    },
    {
        id: 3,
        name: 'Aaron Williams ',
        profession: 'Uproxx',
        quote: `“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”`,
        date: new Date('2018-12-24'),
        photo: aaronphoto,
        link: 'https://twitter.com'
    }
];

const QuotesSection = () => {
    return (
        <Element name={'quotes'}>
            <SectionBg $backgroundImage={bg5}>
                <QuotesSectionBg/>
                <QuotesContainer>
                    <QuotesSectionContent>
                        <SectionDescription style={{marginBottom: '1rem'}}>What people think?</SectionDescription>
                        <SectionTitle>Press quotes</SectionTitle>
                        <SectionText style={{marginBottom: '2rem'}}>Our goal is to create a product and service that you’re
                            satisfied with and use it every
                            day. This is why we’re constantly working on our services to make it better every day and really
                            listen to what our users has to say.</SectionText>
                        <Button href={'https://steamcommunity.com/app/1372880/discussions/'}>
                            <ButtonText>Read more testimonials</ButtonText>
                        </Button>
                    </QuotesSectionContent>
                    <QuotesSectionBody>
                        {quotesArray.map((quote, numberel) => (
                            <QuoteItem key={quote.id} {...quote} hasMarginLeft={numberel % 2 === 0}/>
                        ))}
                    </QuotesSectionBody>

                </QuotesContainer>

            </SectionBg>
        </Element>

    );
};

export default QuotesSection;
