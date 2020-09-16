import React from 'react';
import { Container } from 'react-bootstrap';
import innovateLogo from '../assets/img/innovateuk.svg';
import secretariumLogo from '../assets/img/secretarium.svg';

const About: React.FC = () => {
    return (
        <section className="border-top pt-150 pb-150">
            <Container>
                <h3 className="h1">
                    About us
                </h3>
                <br />
                <h5>Supported by innovate UK</h5>
                {/* <div className="footer-logo innovate">
                    <a href="index.html">
                        <img src={innovateLogo} alt="" />
                    </a>
                </div> */}
                <p>
                    For track and trace technology to be effective, we need a solution that can tell us if we’ve been in contact with an infected person. This creates data protection challenges, because it means tracking where people are and who they have been near. Research has shown that just four location impressions is enough to identify an individual, making it difficult to maintain anonymity while tracking.<br />
                    Innovate UK has provided a series of grants to companies to work on solving this problem.<br />
                    <i>*Innovate UK are part of UK Research and Innovation, a public body funded by the government to support the development of new ideas.</i>
                </p>
                <h5>Powered by secure technology</h5>
                {/* <div className="footer-logo secretarium">
                    <a href="https://secretarium.com" target="_blank" rel="noreferrer">
                        <img src={secretariumLogo} alt="" />
                    </a>
                </div> */}
                <p>
                    Moai is developed with love in London by Secretarium, a deep tech startup with a passion for data security. It doesn’t ask for any personal information to use the app and QR codes are not linked to addresses.<br />
                    Until now, privacy has been limited to data encryption during transit and storage. Our technology keeps data private at all times, even during use, using a combination of tamper-proof code and secure hardware. Because the data is always scrambled, even somebody with physical access to the storage centre would not be able to extract any information.
                </p>
            </Container>
        </section >
    );
};

export default About;
