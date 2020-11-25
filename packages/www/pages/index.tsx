import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from './index-styles.module.css';
import heroImage from '../public/assets/images/hero_image.png';
import eyeSlash from '../public/assets/images/eye_slash.svg';
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
                    <Container padding="p-0 md:p-5">
                        <div className="py-8 md:pb-30 flex flex-col md:flex-row ">
                            <div className="sm:w-full px-12 md:px-8 md:w-1/2">
                                <div className="sm:text-3xl font-bold text-black">
                                    <PostTitle>Secure contact tracing from Moai</PostTitle>
                                </div>
                                <p className="text-xs text-pink-200 font-bold md:text-lg">
                                    A quick and easy contact tracing system that keeps identities private and locations anonymous.
                                </p>
                                <ul className=" py-5 list-inside list-disc ">
                                    <li className="sm:text-xs md:text-lg">Compatible with NHS QR codes</li>
                                    <li className="sm:text-xs md:text-lg">Works on Android and iOS devices</li>
                                    <li className="sm:text-xs md:text-lg">Supports cross-border contact tracing</li>
                                </ul>
                                <div className='lg:pt-10'>
                                    <a href="#register" className="bg-accent-1 mt-8 py-3 px-8 mr-6 text-lg rounded-full text-white sm:inline-block md:inline">
                                    Get Moai
                                    </a>
                                    <a href="#venues" className="bg-accent py-3 px-8 text-lg rounded-full text-accent-1 border border-accent-1 sm:inline-block mt-2 md:inline">
                                    Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2 items-center md:items-end overflow-hidden md:pl-0 pt-8">
                                <div className={styles.bannerImageContainer}>
                                    <img alt="Hero Image" src={heroImage} className={styles.bannerImageTwo} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="venues" className="bg-gray-100">
                    <Container>
                        <div className="md:flex">
                            <div className="w-full md:w-3/4 text-left px-8 py-20 lg:w-1/2">
                                <h2 className="block text-4xl md:text-4xl pb-5 font-bold">
                                    Keep your business ready
                                </h2>
                                <div className="sm:text-base w-full  block md:w-3/4 text-pink-200 font-extrabold mb-4">
                                    Instantly generate an anonymous QR code to allow people to scan into your location quickly. Everything else is handled securely in the app.
                                </div>
                                <div className="md:text-lg text-black flex ">
                                    <img alt='eye slash' src={eyeSlash} className={`sm:inline  ${styles.iconListEye} pr-4 md:pt-4`}/><p className='sm:text-xs md:text-lg md:pt-10 xl: text-2xl'> Your business information <b>stays private</b> and <b>no need to handle anybody’s personal data</b></p>
                                </div>
                                <br></br>
                                <div className="text-black flex ">
                                    <img alt='timer' src={timer} className={`sm:inline  ${styles.iconListTimer} pr-4`}/><p className='sm:text-xs md:pt-5 md:text-lg xl:pt-8 text-2xl'>Helps keep your location COVID-19 compliant  It only <b>takes a minute to setup</b> secure track and trace for your location</p>
                                </div>
                                <Link href="/codes">
                                    <a href="#more" className="block bg-white mt-8 py-3 px-8 text-lg rounded-full text-center text-accent-1 border border-accent-1 inline-block float-left">
                                        Generate free QR codes
                                    </a>
                                </Link>

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
                    <Container>
                        <div className="flex">
                            <div className="w-full  px-8 py-20">
                                <h2 className="text-center text-5xl">
                                    Keep your personal information private
                                </h2>
                                <br></br>
                                <div className="sm:pb-8 text-base  text-center font-bold md:pb-16 text-xl">
                                    Moai can trace your risk of infection without ever knowing who you are or where you’ve been.
                                </div>
                                <div className="text-base pb-6 text-center font-thin md:text-xl">
                                    Scan into a location using their QR code. You won’t need to disclose any personal information and, if there’s any risk you’ve been exposed to COVID-19, you’ll be notified via the app.
                                </div>
                                <div className="sm:w-full text-base md:text-xl text-center  lg:flex ">
                                    <div className='md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16  '><img alt='coal' src={coal} className={styles.iconRow} /></div><div className='sm:text-2xl md:block' ><b>None</b> of your <b>personal data</b> is collected</div></div>
                                    <div className='md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16'><img alt='glass' src={glass} className={styles.iconRow}/></div><div className='sm:text-2xl md:block'>The App<b> cannot be used to track</b> you in quarantine</div></div>
                                    <div className='md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16'><img alt='key' src={key} className={styles.iconRow}/></div><div className='sm:text-2xl md:block'><b>The government does not have access</b> to your information</div></div>
                                    <div className='md:w-1/2 inline-block'><div className='sm:w-full flex justify-center pt-8 md:pt-16'><img alt='target' src={target} className={styles.iconRow}/></div><div className='sm:text-2xl md:block'><b>Does not use GPS or Bluetooth </b> to track you</div></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="authorities" className="bg-gray-200">
                    <Container>
                        <div className="md:flex">
                            <div className="sm:w-full lg:w-1/2 md:w-3/4 text-left px-8 py-20">
                                <h2 className="text-4xl pb-5 text-black font-extrabold">
                                    Keep your country safe
                                </h2>
                                <h3 className=" text-pink-200 pb-8 font-extrabold md:text-2xl">
                                    Moai offers health authorities an independent data handling solution that respects people’s privacy.
                                </h3>
                                <div className="sm:text-base pb-5 md:text-2xl text-black">
                                    <div className='pt-10 flex'><img alt='qrCode' src={qrCode} className={` ${styles.iconList} pr-6`}/><p className='md:pt-6'>Compatible with <b>any health authority QR codes</b></p></div>
                                    <div className='pt-10 flex'><img alt='people' src={people} className={`${styles.iconList} pr-6`}/><p className='md:pt-10'>Able to <b>facilitate cross-border collaboration</b></p></div>
                                    <div className='pt-10 pl-2 flex'><img alt='audit' src={auditable} className={` ${styles.iconList} pr-6`}/><p className='pt-10 md:pt-20'><b>Fully</b> auditable</p></div>
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
