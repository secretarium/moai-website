import React from 'react';
import Link from 'next/link';
import navBarStyles from './nav-bar-styles.module.css';
import logo from '../public/assets/images/moaiLogo.svg';
import { useState } from 'react';

type NavBarProps = {
    fixedToggle?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ fixedToggle }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const menuItems = (
        <div className="text-lg text-black sm:flex-grow text-left md:text-right">
            <Link href="/">
                <a className="block mt-4 md:inline md:mt-0 mr-4 lg:mr-6 duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8 " onClick={() => setIsExpanded(false)}>Home</a>
            </Link>
            <Link href="/faq">
                <a className="block mt-4 md:inline md:mt-0 mr-4 lg:mr-6 duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8 " onClick={() => setIsExpanded(false)}>FAQ</a>
            </Link>
            <Link href="/about">
                <a className="block mt-4 md:inline md:mt-0 mr-4 lg:mr-6 duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8" onClick={() => setIsExpanded(false)}>About us</a>
            </Link>
            <Link href="/news">
                <a className="block mt-4 md:inline md:mt-0 mr-4 lg:mr-6 duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8" onClick={() => setIsExpanded(false)}>News</a>
            </Link>
            <Link href="/#register">
                <a className="block mt-4 md:inline md:mt-0 mr-5 duration-200 transition-colors text-white bg-accent-1 rounded-full px-8 py-4" onClick={() => setIsExpanded(false)}>Get Moai</a>
            </Link>
        </div>
    );

    return (
        <div className={`${navBarStyles.navBarWrapper} ${fixedToggle ? '' : navBarStyles.fixedToggle}`}>
            <div className={`container mx-auto px-5 md:text-center ${navBarStyles.navBar}`}>
                <nav className="flex items-center justify-between flex-wrap px-8">
                    <Link href="/">
                        <a className={`flex items-center flex-shrink-0 text-white ${navBarStyles.logoWrapper}`}>
                            <img src={logo} alt="Secretarium" className="inline-block" />
                        </a>
                    </Link>
                    <div className="block md:hidden">
                        <div className={navBarStyles.plate} onClick={() => setIsExpanded(!isExpanded)}>
                            <div className={`${navBarStyles.burger} ${isExpanded ? navBarStyles.open : ''}`}></div>
                        </div>
                    </div>
                    <div className={'w-full flex-grow md:flex md:items-right md:w-auto hidden'}>
                        {menuItems}
                    </div>
                </nav>
            </div>
            {isExpanded
                ? (
                    <div className={`bg-white p-5 pb-6 ${navBarStyles.menuPanelShadow}`}>
                        {menuItems}
                    </div>
                )
                : null
            }
        </div>
    );
};

export default NavBar;
