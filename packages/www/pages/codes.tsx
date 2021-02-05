import Head from 'next/head';
import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import QRCodeGenerator from '../components/qrcode-generator';
import { withTranslation } from '../i18n';
import { TFunction } from 'next-i18next';


const HomePage = ({ t }: { readonly t: TFunction }) => {
    return (
        <Layout>
            <Head>
                <title>Moai Codes</title>
            </Head>
            <Container>
                <div className="px-8">
                    <section className="mt-20 mb-8 md:mb-12">
                        <h1 className="text-4xl md:text-7xl tracking-tighter leading-tight md:pr-8 text-center">
                            Set up Moai at your location
                        </h1>
                    </section>
                    <section id="codes" className="mb-20">
                        <QRCodeGenerator />
                    </section>
                </div>
            </Container>
        </Layout>
    );
};

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['codes']
});

export default withTranslation('codes')(HomePage);
