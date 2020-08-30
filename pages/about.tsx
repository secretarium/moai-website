import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Team from '../components/Team';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <Layout pageTitle="Moai | About us">
            <Header />
            <MobileMenu />
            <Team />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
