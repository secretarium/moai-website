import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Banner from '../components/Banner';
import Register from '../components/Register';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <Layout pageTitle="Moai | Home">
            <Header />
            <MobileMenu />
            <Banner />
            <Register />
            <Footer />
        </Layout>
    );
};

export default HomePage;
