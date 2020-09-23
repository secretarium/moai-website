import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import Checkin from '../../components/Checkin';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

const FAQPage: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <Layout pageTitle="Moai | Check-in">
            <Header />
            <MobileMenu />
            <Checkin code={slug as string} />
            <Footer />
        </Layout>
    );
};

export default FAQPage;