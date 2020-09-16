import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <Layout pageTitle="Moai | About us">
            <Header />
            <MobileMenu />
            <About />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
