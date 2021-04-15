import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from './index-styles.module.css';
import heroImage from '../public/assets/images/heroImage.png';
import eyeSlash from '../public/assets/images/eyeSlash.svg';
import timer from '../public/assets/images/timer.svg';
import auditable from '../public/assets/images/audit.svg';
import people from '../public/assets/images/connectedPeople.svg';
import qrCode from '../public/assets/images/qrCode.svg';
import alert from '../public/assets/images/alert.svg';
import economy from '../public/assets/images/economy.svg';
import research from '../public/assets/images/research.svg';
import cross from '../public/assets/images/cross.svg';
import checkmark from '../public/assets/images/checkmark.svg';
import whitePhone from '../public/assets/images/phoneWhite.png';
import scanQrCode from '../public/assets/images/scanQrCode.png';
import verified from '../public/assets/images/verified.png';
import googlePlay from '../public/assets/images/googlePlay.svg';
import appleStore from '../public/assets/images/appleStore.svg';
import Link from 'next/link';
import PostTitle from '../components/post-title';
import Container from '../components/container';

const Index: React.FC = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Moai</title>
                </Head>
                <section id="banner">
                    <Container padding="md:p-5">
                        <div className="py-8 md:pb-30 flex flex-col md:flex-row ">
                            <div className="sm:w-full px-12 md:px-8 md:w-1/2">
                                <PostTitle>Secure contact tracing from Moai</PostTitle>
                                <p className="text-lg text-pink-200">
                                    A quick and easy contact tracing system that keeps identities private and locations anonymous.
                                </p>
                                <ul className="py-5 list-inside list-disc ">
                                    <li>Compatible with NHS QR codes</li>
                                    <li>Works on Android and iOS devices</li>
                                    <li>Supports cross-border contact tracing</li>
                                </ul>
                                <div className="py-10">
                                    <div className='sm:inline-block md:pl-0 md:inline items-center'>
                                        <Link href="/codes">
                                            <a href="#register" className="bg-accent-1 text-lg rounded-full text-white  mt-8 mr-6 py-3 px-8 ">
                                                Generate QR Codes
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='sm:inline-block sm:pt-12 md:pl-0 pt-0 md:inline'>
                                        <Link href="/feedback">
                                            <a href="#more" className="bg-accent  text-lg rounded-full text-accent-1 border border-accent-1  mt-2  py-3 px-8">
                                                Assess Exposure Risk
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='sm:inline-block sm:pt-12 md:pl-0 pt-0 md:float-left'>
                                        <a href="https://moaiapp.com/check-certificate/scan-certificate" className="sm:text-sm bg-accent  text-lg rounded-full text-accent-1 border border-accent-1  mt-2  py-3 px-8" target="_blank" rel="noopener noreferrer">
                                                Verify Immunity Certificate
                                        </a>    
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 items-center items-end overflow-hidden pl-0 pt-8 lg:pt-20">
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero" src={heroImage} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="venues" className="bg-gray-100 pt-10">
                    <Container padding="md:p-5">
                        <div className="md:flex px-12 md:px-8">
                            <div className="sm:px-2 w-full md:w-3/4 text-left md:py-20 lg:w-1/2">
                                <h2 className="block text-3xl pb-10">
                                    Keep your business ready
                                </h2>
                                <div className="text-lg text-pink-200">
                                    Instantly generate an anonymous QR code to allow people to scan into your location quickly. Everything else is handled securely in the app.
                                </div>
                                <div className="flex text-black pt-10">
                                    <img alt='eye slash' src={eyeSlash} className={styles.icon} />
                                    <p> Your business information <b>stays private</b> and <b>no need to handle anybody’s personal data</b></p>
                                </div>
                                <div className="flex text-black pt-10">
                                    <img alt='timer' src={timer} className={styles.icon} />
                                    <p>Helps keep your location COVID-19 compliant  It only <b>takes a minute to setup</b> secure track and trace for your location</p>
                                </div>
                                <div>
                                    <Link href="/codes">
                                        <a href="#more" className="block bg-white mt-8 py-3 px-8 text-lg rounded-full text-center text-accent-1 border border-accent-1 inline-block md:float-left">
                                            Generate QR Codes
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="sm:w-full block md:w-2/3 items-center lg:items-end overflow-hidden md:pl-0 pt-8">
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero" src={scanQrCode} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="exposure" className="bg-pink-200 text-white">
                    <Container padding="md:p-5">
                        <div className="flex">
                            <div className="w-full px-8 py-20 text-center">
                                <h2 className="text-3xl">
                                    Measure exposure risk
                                </h2>
                                <br></br>
                                <div className="text-xl">
                                Our short survey can help you to stay safe while out and about by assessing your risk level in a given environment.*<br />
                                It asks you simple questions about your location and any existing medical conditions that may make you more vulnerable to COVID-19.
                                </div>
                                <div className="text-base py-6 md:px-20 lg:px-48">
                                    *This survey and your risk level result should be used as a guideline only. <br />
                                    Please follow all official advice issued by your local health authority.
                                </div>
                                <div className="block md:flex gap-10 text-base">
                                    <div className='w-full md:w-1/2 lg:w-1/3 text-center text-xl'>
                                        <img alt='research' src={research} className={styles.iconGrid} /><br />
                                        Enables vital research into <b>virus propagation</b>
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/3 text-xl'>
                                        <img alt='alert' src={alert} className={styles.iconGrid} /><br />
                                        Alerts users of <b>risk level</b>
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/3 text-xl'>
                                        <img alt='economy' src={economy} className={styles.iconGrid} /><br />
                                        Supports a <b>safe reopening</b> of the economy
                                    </div>
                                </div>
                                <div>
                                    <Link href="/feedback">
                                        <a href="#more" className="block bg-white mt-8 py-3 px-8 text-lg rounded-full text-center text-accent-2 border border-accent-2 inline-block">
                                            Start Survey
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="certificates" className="bg-gray-100 pt-10">
                    <Container padding="md:p-5">
                        <div className="md:flex px-12 md:px-8">
                            <div className="sm:px-2 w-full md:w-3/4 text-left px-8 py-20 lg:w-1/2">
                                <h2 className="block text-3xl pb-10">
                                    Immunity certificates
                                </h2>
                                <h3 className="text-lg text-pink-200">
                                    Moai users can generate a health-authority-approved<br /> immunity certificate (personal QR code) in the app.
                                </h3>
                                <div className="flex text-black pt-10 mb-20">
                                    <p>To help you keep your premises COVID-secure, <br/>
                                    the simple verification tool lets you check people’s <br/>
                                    COVID immunity status in seconds by scanning their ID <br/>
                                    and unique QR code.</p>
                                </div>
                                <div>
                                    <a href="https://moaiapp.com/check-certificate/scan-certificate" className="bg-accent-1 text-lg rounded-full text-white  mt-8 mr-6 py-3 px-8 " target="_blank" rel="noopener noreferrer">
                                        Verify Certificate
                                    </a>
                                </div>
                            </div>
                            <div className="sm:w-full items-center lg:items-end overflow-hidden md:pl-0 lg:w-2/3 " >
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero" src={verified} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="info">
                    <Container padding="md:p-5">
                        <div className="flex">
                            <div className="w-full px-8 py-20 text-center">
                                <h2 className="text-3xl">
                                    Keep your personal information private
                                </h2>
                                <br></br>
                                <div className="text-xl">
                                    Moai can trace your risk of infection without ever knowing who you are or where you’ve been.
                                </div>
                                <div className="text-base py-6 md:px-20 lg:px-48">
                                    Scan into a location using their QR code. You won’t need to disclose any personal information and, if there’s any risk you’ve been exposed to COVID-19, you’ll be notified via the app.
                                </div>
                                <div className="block md:flex gap-10 text-base">
                                    <div className='w-full sm:mb-8 md:w-1/2 lg:w-1/4 text-center text-xl'>
                                        <img alt='Cross' src={cross} className={styles.iconGrid} /><br />
                                        <b>None</b> of your <b>personal data</b> is collected
                                    </div>
                                    <div className='w-full sm:mb-8 md:w-1/2 lg:w-1/4 text-xl'>
                                        <img alt='Cross' src={cross} className={styles.iconGrid} /><br />
                                        The App<b> cannot be used to track</b> you in quarantine
                                    </div>
                                    <div className='w-full sm:mb-8 md:w-1/2 lg:w-1/4 text-xl'>
                                        <img alt='Cross' src={cross} className={styles.iconGrid} /><br />
                                        <b>The government does not have access</b> to your information
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/4 text-xl'>
                                        <img alt='Cross' src={cross} className={styles.iconGrid} /><br />
                                        <b>Does not use GPS or Bluetooth </b> to track you
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="country" className="bg-pink-200 text-white">
                    <Container padding="md:p-5">
                        <div className="flex">
                            <div className="w-full px-8 py-20 text-center">
                                <h2 className="text-3xl">
                                    Keep your country safe
                                </h2>
                                <br></br>
                                <div className="text-xl">
                                    Moai offers health authorities an independent data handling solution that respects people’s privacy.
                                </div>
                                <br></br>
                                <br></br>
                                <div className="block md:flex gap-10 text-base">
                                    <div className='w-full sm:mb-8 md:w-1/2 lg:w-1/3 text-center text-xl'>
                                        <img alt='Checkmark' src={checkmark} className={styles.iconGrid} /><br />
                                        Compatible with any health authority QR codes
                                    </div>
                                    <div className='w-full sm:mb-8 md:w-1/2 lg:w-1/3 text-xl'>
                                        <img alt='Checkmark' src={checkmark} className={styles.iconGrid} /><br />
                                        Fully auditable
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/3 text-xl'>
                                        <img alt='Checkmark' src={checkmark} className={styles.iconGrid} /><br />
                                        Able to facilitate cross-border collaboration
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="download">
                    <Container padding="md:p-5">
                        <div className="flex">
                            <div className="w-full px-8 py-20 text-center">
                                <h2 className="text-3xl">
                                    Download Moai now!
                                </h2>
                                <br></br>
                                <br></br>
                                <div className="block md:flex justify-content-center">
                                    <div className='w-full sm:mb-8'>
                                        <a href="https://play.google.com/store/apps/details?id=com.secretarium.moai.research" target="_blank" rel="noopener noreferrer">
                                            <img alt='Google Play Store' src={googlePlay} className={styles.storeIcons} />
                                        </a>
                                    </div>
                                    <div className='w-full sm:mb-8'>
                                        <a href="https://apps.apple.com/us/app/moai/id1555274529" target="_blank" rel="noopener noreferrer">
                                            <img alt='Apple App Store' src={appleStore} className={styles.storeIcons} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Index;
