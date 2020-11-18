import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from './index-styles.module.css';
import heroImage from '../public/assets/images/hero_image.png';
import eyeSlash from '../public/assets/images/eye_slash.png';
import timer from '../public/assets/images/timer.png';
import auditable from '../public/assets/images/audit.png';
import coal from '../public/assets/images/coal.png';
import people from '../public/assets/images/connectedPeople.png';
import key from '../public/assets/images/key.png';
import glass from '../public/assets/images/magnifyingGlass.png';
import target from '../public/assets/images/target.png';
import qrCode from '../public/assets/images/qrCode.png';
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
                    <Container padding="p-0 md:p-5">
                        <div className="py-8 md:pb-30 flex flex-col md:flex-row ">
                            <div className="sm:w-full px-12 md:px-8 md:w-1/2">
                                <div className="font-bold text-black">
                                    <PostTitle>Secure contact<br />tracing from Moai</PostTitle>
                                </div>
                                <p className="sm:w-2/3 text-xl text-pink-200 font-bold">
                                    A quick and easy contact tracing system that keeps identities private and locations anonymous.
                                </p>
                                <ul className="py-5 list-inside list-disc ">
                                    <li className="text-lg">Compatible with NHS QR codes</li>
                                    <li className="text-lg">Works on Android and iOS devices</li>
                                    <li className="text-lg">Supports cross-border contact tracing</li>
                                </ul>

                                <a href="#register" className="bg-accent-1 mt-8 py-3 px-8 mr-6 text-lg rounded-full text-white inline-block">
                                    Get Moai
                                </a>
                                <div className='md:hidden'><br></br></div>
                                <a href="#venues" className="bg-white mt-8 py-3 px-8 text-lg rounded-full text-blue-900 border border-blue-900 inline-block">
                                    Learn More
                                </a>
                            </div>
                            <div className="md:w-2/3 items-center md:items-end overflow-hidden md:pl-0" style={{
                                // maxHeight: '50rem'
                                height: '50rem'
                            }}>
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero Image" src={heroImage} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>

                    {/* <Container className="">
                        <div className="px-8 lg:w-1/3">
                                <PostTitle>Secure contact<br />tracing from Moai</PostTitle>
                                <p className="text-xl">
                                    Our quick and easy COVID-19 tracing system keeps your identity private and your location anonymous. Our app works on all Android and iOS devices and supports cross-border contact tracing.
                                </p>
                                <a href="#register" className="bg-accent-1 mt-8 py-3 px-8 mr-6 text-lg rounded-full text-white inline-block">
                                    Register
                                </a>
                                <a href="#venues" className="bg-white mt-8 py-3 px-8 text-lg rounded-full text-blue-900 border border-blue-900 inline-block">
                                    Discover More
                                </a>
                            </div>
                        </Container>
                        <div className="lg:w-2/3 items-center lg:items-end overflow-hidden md:pl-0" style={{
                            // maxHeight: '50rem'
                            height: '50rem'
                        }}>
                            <div className={styles.bannerImageContainer}>
                                <img alt="Chat screen" src={mockTwo} className={styles.bannerImageTwo} />
                                <img alt="Main screen" src={mockOne} className={styles.bannerImageOne} />
                            </div>
                        </div>
                    </div> */}
                </section>
                <section id="venues" className="bg-gray-100">
                    <Container>
                        <div className="flex">
                            <div className="w-full md:w-3/4 text-left px-8 py-20 lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl pb-5 font-bold">
                                    Keep your business ready
                                </h2>
                                <div className="w-3/4 text-pink-200 font-extrabold mb-4">
                                    Instantly generate an anonymous QR code to allow people to scan into your location quickly. Everything else is handled securely in the app.
                                </div>
                                <div className="text-base text-black ">
                                    <div className={styles.iconContainer}>
                                        <div><img alt='eye slash' src={eyeSlash} className={styles.iconList}/><br></br><p> Your business information <b>stays private</b> and <b>no need to handle anybody’s personal data</b></p></div>
                                        <div className='mt-10'><img alt='timer' src={timer} className={styles.iconList}/><br></br><p>Helps keep your location COVID-19 compliant  It only <b>takes a minute to setup</b> secure track and trace for your location</p></div>
                                    </div>
                                </div>
                                <Link href="/codes">
                                    <a href="#more" className="bg-white mt-8 py-3 px-8 text-lg rounded-full text-center text-accent-1 border border-accent-1 inline-block float-left">
                                        Generate free QR codes
                                    </a>
                                </Link>
                            </div>
                            <div className="lg:w-2/3 items-center lg:items-end overflow-hidden md:pl-0" style={{
                                // maxHeight: '50rem'
                                height: '50rem'
                            }}>
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero Image" src={phone} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="guests" className="bg-pink-200 text-white">
                    <Container>
                        <div className="flex">
                            <div className="w-full  px-8 py-20">
                                <h2 className="text-center text-5xl">
                                    Keep your personal information private
                                </h2>
                                <br></br>
                                <div className="text-2xl pb-16 text-center font-bold">
                                    Moai can trace your risk of infection without ever knowing who you are or where you’ve been.
                                </div>
                                <div className="text-2xl pb-16 text-center font-thin">
                                    Scan into a location using their QR code. You won’t need to disclose any personal information and, if there’s any risk you’ve been exposed to COVID-19, you’ll be notified via the app.
                                </div>
                                <div className="sm:w-full text-xl text-center xl:flex justify-start">
                                    <div className='sm:w-full  md:w-1/2 xl:w-1/4'> <img alt='timer' src={coal} className={styles.iconRow}/><p><b>None</b> of your <b>personal data</b> is collected</p></div>
                                    <div className='sm:w-full md:w-1/2 xl:w-1/4'> <img alt='timer' src={glass} className={styles.iconRow}/><p>The App<b> cannot be used to track</b> you in quarantine</p></div>
                                    <div className='sm:w-full  md:w-1/2 xl:w-1/4'> <img alt='timer' src={key} className={styles.iconRow}/><p><b>The government does not have access</b> to your information</p></div>
                                    <div className='sm:w-full  md:w-1/2 xl:w-1/4'> <img alt='timer' src={target} className={styles.iconRow}/><p><b>Does not use GPS or Bluetooth </b> to track you</p></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="authorities" className="bg-gray-200">
                    <Container>
                        <div className="flex">
                            <div className="lg:w-1/2 md:w-3/4 text-left px-8 py-20">
                                <h2 className="text-3xl md:text-4xl pb-5 text-black font-extrabold">
                                    Keep your country safe
                                </h2>
                                <h3 className="md:sm text-pink-200 pb-8 font-extrabold">
                                    Moai offers health authorities an independent data handling solution that respects people’s privacy.
                                </h3>
                                <div className=" pb-5 text-lg text-black">
                                    <div className='pt-10'><img alt='qrCode' src={qrCode} className={styles.iconList}/><br></br><p>Compatible with <b>any health authority QR codes</b></p></div>
                                    <br></br>
                                    <div className='pt-10'><img alt='people' src={people} className={styles.iconList}/><br></br><p>Able to <b>facilitate cross-border collaboration</b></p></div>
                                    <br></br>
                                    <div className='pt-10'><img alt='audit' src={auditable} className={styles.iconList}/><br></br><p><b>Fully</b> auditable</p></div>
                                </div>
                            </div>
                            <div className="lg:w-2/3 items-center lg:items-end overflow-hidden md:pl-0" style={{
                                // maxHeight: '50rem'
                                height: '50rem'
                            }}>
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
                            <h2 className="text-3xl md:text-4xl pb-5 text-black font-extrabold">
                                Moai is almost ready!
                            </h2>
                            <div className="text-base md:text-lg text-accent-2 pb-5 font-extrabold">
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
