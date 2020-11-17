import React from 'react';
import Link from 'next/link';
import navBarStyles from './nav-bar-styles.module.css';
import logo from '../public/assets/images/moai_logo.png';
import { useState } from 'react';

type NavBarProps = {
    fixedToggle?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ fixedToggle }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const menuItems = (
        <div className="text-lg md:flex-grow text-left md:text-right lg: mr-12" >
            <Link href="/">
                <a className="block mt-4 md:inline md:mt-0  lg: duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8 font-bold" onClick={() => setIsExpanded(false)}>Home</a>
            </Link>
            <Link href="/faq">
                <a className="block mt-4 md:inline md:mt-0  lg: duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8 font-bold" onClick={() => setIsExpanded(false)}>FAQ</a>
            </Link>
            <Link href="/about">
                <a className="block mt-4 md:inline md:mt-0  lg: duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8 font-bold" onClick={() => setIsExpanded(false)}>About us</a>
            </Link>
            <Link href="/news">
                <a className="block mt-4 md:inline md:mt-0  lg: duration-200 transition-colors hover:text-accent-2 px-8 md:px-2 lg:px-8 font-bold" onClick={() => setIsExpanded(false)}>News</a>
            </Link>
            <Link href="/#register">
                <a className="block mt-4 md:inline md:mt-0 lg: mr-12 duration-200 transition-colors text-white bg-accent-1 rounded-full px-8 py-4 font-bold" onClick={() => setIsExpanded(false)}>Get Moai</a>
            </Link>
        </div>
    );

    return (
        <div className={`${navBarStyles.navBarWrapper} ${fixedToggle ? '' : navBarStyles.fixedToggle}`}>
            <div className={`container mx-auto px-5 md:text-center ${navBarStyles.navBar}`}>
                <nav className="flex items-center justify-between flex-wrap px-8">
                    <Link href="/">
                        <a className={`flex items-center flex-shrink-0 text-white mr-6 ${navBarStyles.logoWrapper}`}>
                            <img src={logo} alt="Secretarium" className=" inline-block object-fill" />
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
            <div className={'bg-blue-900 text-center text-white text-sm h-10 pt-3'}>
                Promotional Mesaging such app release date or information
            </div>
        </div>
    );
};

export default NavBar;
