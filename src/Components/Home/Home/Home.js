import React from 'react';
import Footer from '../../Footer/Footer';
import Clients from '../Clients/Clients';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => { 
    return (
        <>
            <Header />
            <Services />
            <Works />
            <Feedback />
            <Clients/>
            <Footer />
        </>
    );
};

export default Home;