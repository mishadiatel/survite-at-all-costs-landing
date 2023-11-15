import React from 'react';
import MainSection from './components/MainSection/MainSection';
import AboutSection from './components/AboutSection/AboutSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import RequirementsSection from './components/Requirements/Requirements';
import QuotesSection from './components/QuotesSection/QuotesSection';
import SubscribeSection from './components/SubscrideSection/SubscribeSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App: React.FC = () => {

    return (
        <>
            <Header />
            <MainSection/>
            <AboutSection/>
            <FeatureSection/>
            <RequirementsSection />
            <QuotesSection />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default App;
