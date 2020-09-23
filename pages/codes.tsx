import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import QRCodeGenerator from '../components/QRCodeGenerator';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <Layout pageTitle="Moai | Get you codes">
            <Header />
            <MobileMenu />
            <QRCodeGenerator />
            <Footer />
        </Layout>
    );
};

export default HomePage;
