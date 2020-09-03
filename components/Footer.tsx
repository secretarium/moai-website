import React from 'react';
import footerLogo from '../assets/img/logo_outline.svg';
import innovateLogo from '../assets/img/innovateuk.svg';
import secretariumLogo from '../assets/img/secretarium.svg';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-top pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 pr-5">
                            <div className="footer-widget">
                                <div className="footer-logo innovate">
                                    <a href="index.html">
                                        {/* <img src={footerLogo} alt="" /> */}
                                        <img src={innovateLogo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Moai is supported by <a href="https://innovateuk.blog.gov.uk/" target="_blank" rel="noreferrer">Innovate UK</a> EU Temporary Framework funding strand. Project number 72834 in UKRI Ideas to Address COVID-19.
                                </p>

                                {/* <div className="footer-social-area">
                                    <ul className="social-icons social-icons-light nav">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6 px-4">
                            <div className="footer-widget">
                                <div className="footer-logo secretarium">
                                    <a href="https://secretarium.com" target="_blank" rel="noreferrer">
                                        <img src={secretariumLogo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Moai is developed with love by <a href="https://secretarium.com" target="_blank" rel="noreferrer">Secretarium Ltd.</a> a London-based deep-tech start-up specialized in confidential computing.
                                </p>

                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="widget-header">
                                    <h5>Our Address</h5>
                                </div>

                                <div className="widget-body">
                                    <ul className="address-list">
                                        <li>
                                            <span>
                                                <i className="fa  fa-phone-square"></i>
                                            </span>
                      888 999 0000
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa  fa-envelope"></i>
                                            </span>
                      needhelp@moai.com
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa  fa-map"></i>
                                            </span>
                      855 road, broklyn street, new york 600
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="widget-header">
                                    <h5>Extra Links</h5>
                                </div>
                            </div>

                            <div className="widget-body">
                                <div className="extra-link">
                                    <div className="link-left">
                                        <ul>
                                            <li>
                                                <a href="#">About</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Team</a>
                                            </li>
                                            <li>
                                                <a href="#">Features</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">How It Works</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="link-right">
                                        <ul>
                                            <li>
                                                <a href="#">Help</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                            <li>
                                                <a href="#">Clients</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="widget-body">
                                    <div className="twetter-post-inner">
                                        <div className="footer-post-details">
                                            @Secretarium Take your web design to new heights with
                      moai. <br />
                                            <a href="http://yhdj58.tp8/JK">http://yhdj58.tp8/JK</a>
                                        </div>
                                        <div className="twetter-post">
                                            <span>
                                                <i className="fa fa-twitter"></i>
                                            </span>
                      moai - Nov 23, 2018
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-text text-center">
                    <Link href="/legal"><a>Privacy Policy</a></Link><br />
                    <p>Copyright 2020 by <a href="https://secretarium.com" target="_blank" rel="noreferrer">Secretarium Ltd.</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
