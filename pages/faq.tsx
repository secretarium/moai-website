import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
    return (
        <Layout pageTitle="Moai | FAQ">
            <Header />
            <MobileMenu />
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default FAQPage;
