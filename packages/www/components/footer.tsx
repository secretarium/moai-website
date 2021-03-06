import React from 'react';
import Container from './container';
import innovateLogo from '../public/assets/images/logoInnovateUk.svg';
import secretariumLogo from '../public/assets/images/logoSecretarium.svg';
import footerStyles from './footer-styles.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="text">
            <div className="text-white bg-blue-900">
                <Container>
                    <div className="py-28 px-8 flex flex-col gap-10 md:flex-row items-top">
                        <div className="leading-8 text-lg mb-10 lg:mb-0 lg:pr-4 md:w-1/2 lg:w-1/3">
                            <img src={innovateLogo} alt="Innovate UK" className={footerStyles.footerImages} />
                            Moai is supported by <a href="https://innovateuk.blog.gov.uk/" target="_blank" rel="noreferrer">Innovate UK</a> EU Temporary Framework funding strand. Project number 72834 in UKRI Ideas to Address COVID-19.
                        </div>
                        <div className="leading-8 text-lg mb-10 lg:mb-0 lg:pr-4  md:w-1/2 lg:w-1/3">
                            <img src={secretariumLogo} alt="Secretarium" className={footerStyles.footerImages} />
                            Moai is developed with love in London by <a href="https://secretarium.com" target="_blank" rel="noreferrer">Secretarium</a>, a deep-tech start-up specialized in confidential computing.
                        </div>
                    </div>
                </Container>
            </div>
            <div className="text-white bg-blue-900">
                <Container>
                    <hr className={footerStyles.footerSeparator} />
                    <div className="w-full text-center text-m py-10">
                        Secretarium © 2020 All Rights Reserved<br />
                        <Link href="/legal"><a className="text-accent-1 hover:text-red-300">Privacy policy</a></Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
