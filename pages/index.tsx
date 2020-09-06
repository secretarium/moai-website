import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Banner from '../components/Banner';
import SecureCT from '../components/SecureCT';
import ComparisonVG from '../components/ComparisonVG';
import Register from '../components/Register';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <Layout pageTitle="Moai | Home">
            <Header />
            <MobileMenu />
            <Banner />
            <SecureCT />
            <ComparisonVG />
            <Register />
            <Footer />
        </Layout>
    );
};

export default HomePage;
