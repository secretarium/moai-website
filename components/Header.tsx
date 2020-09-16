import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';

import headerLogo from '../assets/img/logo.svg';
import Link from 'next/link';

const HeaderHome: React.FC<{
    extraClassName?: string;
}> = (props) => {
    const [sticky, setSticky] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setSticky(true);
        } else if (window.scrollY < 20) {
            setSticky(false);
        }
    };

    useEffect(() => {
        if (isExpanded)
            document.querySelector('.side-menu__block').classList.add('active');
        else
            document.querySelector('.side-menu__block').classList.remove('active');
    }, [isExpanded]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // mobileMenu();
        return () => {
            // mobileMenu();
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const mobileMenu = () => {
        document
            .querySelector('.side-menu__toggler')
            .addEventListener('click', function (e) {
                document.querySelector('.side-menu__block').classList.toggle('active');
                e.preventDefault();
            });

        //Close Mobile Menu
        const sideMenuCloser = document.querySelectorAll(
            '.side-menu__close-btn, .side-menu__block-overlay'
        );

        sideMenuCloser.forEach((sideMenuCloserBtn) => {
            sideMenuCloserBtn.addEventListener('click', function (e) {
                document.querySelector('.side-menu__block').classList.remove('active');
                e.preventDefault();
            });
        });
    };

    return (
        <header className={`header ${props.extraClassName}`}>
            <div
                className={`main-header ${sticky === true ? 'sticky' : ' '}`}
            >
                <div className="main-menu-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src={headerLogo} alt="moai" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-6 menu-button">
                                <div className="menu--inner-area clearfix">
                                    <div className="menu-wraper">
                                        <nav>
                                            <div className="header-menu">
                                                <div
                                                    id="menu-button"
                                                    className="menu-opened side-menu__toggler"
                                                >
                                                    <div className="plate" onClick={() => setIsExpanded(!isExpanded)}>
                                                        <div className={`burger ${isExpanded ? 'open' : ''}`}></div>
                                                    </div>
                                                </div>
                                                <NavLinks />
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
                                <div className="urgent-call text-right">
                                    <a href="#register" className="btn">
                                        Get Moai
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderHome;
