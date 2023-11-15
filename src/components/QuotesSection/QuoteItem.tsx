import React, {useEffect, useState} from 'react';
import {
    QtCard,
    QtCardContent, QtCardDate,
    QtCardHeading,
    QtCardImage,
    QtCardName,
    QtCardNameContainer,
    QtCardProfession, QtCardQuote, QtCardSocialLogo
} from './QuoteItem.styled';
import Svg from '../Svg';
import {theme} from '../../utils/theme';
import {formatDate} from '../../utils/formatDate';

interface IQtCard {
    name: string;
    profession: string;
    quote: string;
    date: Date;
    photo: string;
    id: number;
    link: string,
    hasMarginLeft: boolean
}

const QuoteItem: React.FC<IQtCard> = ({link, name, profession, quote, id, photo, date, hasMarginLeft}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // console.log(screenWidth)

    // Update screenWidth when the window is resized
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <QtCard style={{marginLeft: (screenWidth > 500 && hasMarginLeft) ? '20%' : '0',
           }}>
            <QtCardContent>
                <QtCardHeading>
                    <QtCardImage src={photo}/>
                    <QtCardNameContainer>
                        <QtCardName>{name}</QtCardName>
                        <QtCardProfession>{profession}</QtCardProfession>
                    </QtCardNameContainer>
                </QtCardHeading>
                <QtCardQuote>{quote}</QtCardQuote>
                <QtCardDate>{formatDate(date)}</QtCardDate>
            </QtCardContent>
            <QtCardSocialLogo>
                <a href={link}>
                    <Svg name={'twitter-logo'} fill={theme.color.lightGray} height={'1.8rem'} width={'1.8rem'} hoverColor={theme.color.darkBlack} />
                </a>

            </QtCardSocialLogo>
        </QtCard>
    );
};

export default QuoteItem;
