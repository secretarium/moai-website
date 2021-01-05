import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from './index-styles.module.css';
import heroImage from '../public/assets/images/heroImage.png';
import eyeSlash from '../public/assets/images/eyeSlash.svg';
import timer from '../public/assets/images/timer.svg';
import auditable from '../public/assets/images/audit.svg';
import coal from '../public/assets/images/coal.svg';
import people from '../public/assets/images/connectedPeople.svg';
import key from '../public/assets/images/key.svg';
import glass from '../public/assets/images/magnifyingGlass.svg';
import target from '../public/assets/images/target.svg';
import qrCode from '../public/assets/images/qrCode.svg';
import whitePhone from '../public/assets/images/phoneWhite.png';
import phone from '../public/assets/images/normalPhone.png';
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
                                    <div className='sm:inline-block sm:pl-20 md:pl-0 md:inline items-center'>
                                        <a href="#register" className="bg-accent-1 text-lg rounded-full text-white  mt-8 mr-6 py-3 px-8 ">
                                            Get Moai
                                        </a>
                                    </div>
                                    <div className='sm:inline-block sm:pl-18 sm:pt-8 md:pl-0 pt-0 md:inline'>
                                        <a href="#venues" className="bg-accent  text-lg rounded-full text-accent-1 border border-accent-1  mt-2  py-3 px-8">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 items-center items-end overflow-hidden pl-0 pt-8 lg:pt-20">
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero Image" src={heroImage} className={styles.bannerImageTwo} />
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
                                            Generate free QR codes
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="sm:w-full block md:w-2/3 items-center lg:items-end overflow-hidden md:pl-0 pt-8">
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero Image" src={phone} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="guests" className="bg-pink-200 text-white">
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
                                    <div className='w-full md:w-1/2 lg:w-1/4 text-center'>
                                        <img alt='coal' src={coal} className={styles.iconGrid} /><br />
                                        <b>None</b> of your <b>personal data</b> is collected
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/4'>
                                        <img alt='glass' src={glass} className={styles.iconGrid} /><br />
                                        The App<b> cannot be used to track</b> you in quarantine
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/4'>
                                        <img alt='key' src={key} className={styles.iconGrid} /><br />
                                        <b>The government does not have access</b> to your information
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/4'>
                                        <img alt='target' src={target} className={styles.iconGrid} /><br />
                                        <b>Does not use GPS or Bluetooth </b> to track you
                                    </div>
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
                                    Measure exposure risk
                                </h2>
                                <div className="text-lg text-pink-200">
                                    Moai gathers information securely via a short survey to measure factors that affect the spread of COVID-19. Users will be asked simple questions, like how busy a place was, what the ventilation was like, or if people were wearing masks.
                                </div>
                                <ul className="py-5 list-inside list-disc ">
                                    <li>Alerts users of risk level</li>
                                    <li>Enables vital research into virus propagation</li>
                                    <li>Supports a safe reopening of the economy</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="authorities" className="bg-gray-200">
                    <Container padding="md:p-5">
                        <div className="md:flex px-12 md:px-8">
                            <div className="sm:px-2 w-full md:w-3/4 text-left px-8 py-20 lg:w-1/2">
                                <h2 className="block text-3xl pb-10">
                                    Keep your country safe
                                </h2>
                                <h3 className="text-lg text-pink-200">
                                    Moai offers health authorities an independent data handling solution that respects people’s privacy.
                                </h3>
                                <div className="flex text-black pt-10">
                                    <img alt='qrCode' src={qrCode} className={styles.icon} />
                                    <p>Compatible with <b>any health authority QR codes</b></p>
                                </div>
                                <div className="flex text-black pt-10">
                                    <img alt='people' src={people} className={styles.icon} />
                                    <p>Able to <b>facilitate cross-border collaboration</b></p>
                                </div>
                                <div className="flex text-black pt-10">
                                    <img alt='audit' src={auditable} className={styles.icon} />
                                    <p><b>Fully</b> auditable</p>
                                </div>
                            </div>
                            <div className="sm:w-full items-center lg:items-end overflow-hidden md:pl-0 lg:w-2/3 " >
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero Image" src={whitePhone} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="register" className="bg-gray-100">
                    <Container>
                        <div className="text-center px-8 py-20">
                            <h2 className="text-3xl pb-5">
                                Moai is almost ready!
                            </h2>
                            <div className="text-accent-2 pb-5">
                                Enter your email below and we’ll let you know as soon as it’s launched.
                            </div>
                            <form name="mc-embedded-subscribe-form" target="_blank" action="https://moaiapp.us17.list-manage.com/subscribe/post?u=1bbe9d3ad8430f833640de63c&id=284f13df99" method="post" id="mc-embedded-subscribe-form">
                                <input id="mce-EMAIL" type="email" name="EMAIL" required className="py-2 px-5 text-xl w-full sm:w-1/2 text-center bg-gray-200" placeholder="Email address" />
                                <br /><br />
                                <button id="mc-embedded-subscribe" className="bg-accent-1 mt-8 py-3 px-8 text-lg rounded-full text-center text-white inline-block" type="submit">
                                    Register for updates
                                </button>
                            </form>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Index;
