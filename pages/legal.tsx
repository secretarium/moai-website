import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Privacy from '../components/Privacy';
import Footer from '../components/Footer';

const LegalPage = () => {
    return (
        <Layout pageTitle="Moai | About us">
            <Header />
            <MobileMenu />
            <Privacy />
            <Footer />
        </Layout>
    );
};

export default LegalPage;
