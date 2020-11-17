import React from 'react';
import Container from './container';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="text">
            <div className="text-white bg-blue-900">
                <Container>
                    <div className="py-28 px-8 flex flex-col gap-10 md:flex-row items-top">

                        <div className=" mb-10 lg:mb-0 lg:pr-4 md:w-1/2 lg:w-1/4">
                            <div className='text-2xl'>secretarium</div>
                            <div className='text-xs'>YOUR SECURE CLOUD</div>
                            <br></br>
                            <div className="text-sm">
                            Moai is supported by <a href="https://innovateuk.blog.gov.uk/" target="_blank" rel="noreferrer">Innovate UK</a> EU Temporary Framework funding strand. Project number 72834 in UKRI Ideas to Address COVID-19.
                            </div>
                        </div>

                        <div className=" mb-10 lg:mb-0 lg:pr-4  md:w-1/2 lg:w-1/4">
                            <div className='text-2xl'>secretarium</div>
                            <div className='text-sm text-gray-200'>YOUR SECURE CLOUD</div>
                            <br></br>
                            <div className="text-sm">
                            Moai is developed with love in London by <a href="https://secretarium.com" target="_blank" rel="noreferrer">Secretarium</a>, a deep-tech start-up specialized in confidential computing.
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <hr  style={{
                    color: '#fff',
                    width: '80%'
                }}/>
                <div className="text-center text-m py-10 text-gray-100 bg-blue-900">
                        Secretarium © 2020 All Rights Reserved<br />
                    <Link href="/legal"><a className="text-blue-500">Privacy policy</a></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
