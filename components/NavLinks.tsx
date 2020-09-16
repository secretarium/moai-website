import React from 'react';
import Link from 'next/link';

const NavLinks: React.FC = () => {
    return (
        <ul className="main-nav__navigation-box">
            <li>
                <Link href="/">
                    <a title="Home">
                        Home
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/faq">
                    <a title="FAQ">
                        FAQ
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a title="About us">
                        About us
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;
