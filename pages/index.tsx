import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Banner from '../components/Banner';
import SecureCT from '../components/SecureCT';
import Register from '../components/Register';
import Footer from '../components/Footer';
import Venues from '../components/Venues';

const HomePage: React.FC = () => {
    return (
        <Layout pageTitle="Moai | Home">
            <Header />
            <MobileMenu />
            <Banner />
            <SecureCT />
            <Venues />
            <Register />
            <Footer />
        </Layout>
    );
};

export default HomePage;
