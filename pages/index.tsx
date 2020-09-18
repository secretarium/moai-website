import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Banner from '../components/Banner';
import Register from '../components/Register';
import Footer from '../components/Footer';
import Venues from '../components/Venues';
import Guests from '../components/Guests';

const HomePage: React.FC = () => {
    return (
        <Layout pageTitle="Moai | Home">
            <Header />
            <MobileMenu />
            <Banner />
            {/* <SecureCT /> */}
            <Venues />
            <Guests />
            <Register />
            <Footer />
        </Layout>
    );
};

export default HomePage;
