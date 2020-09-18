import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
    return (
        <section className="border-top pt-150 pb-150">
            <Container>
                <h3 className="h1">
                    About us
                </h3>
                <br />
                <p>
                    Moai is a smart, secure contact tracing solution created by Secretarium, a deep-tech startup founded in 2016 with the aim of building useful technology that never compromises anyone’s privacy.
                    <br />
                    <br />
                    The founders are from the world of banking, but they left to pursue projects that would solve problems around handling highly sensitive data: enforcing consent and guaranteeing privacy by design and by default.
                </p>
                <br />

                <h5>Why "Moai" — 模合 ?</h5>
                <p>
                    A Japanese word which translates to 'meeting for a common purpose', "moai" describes social support groups that came together in the community to look out for each other during hard times.
                    <br />
                    <br />
                    Our technology helps communities protect each other during hard times: it can track and stop the spread of diseases like COVID-19 efficiently, without sacrificing individual rights to privacy.
                </p>
                <br />

                <h5>Securing personal data</h5>
                <p>
                    Until now, privacy has been limited to encrypting data during transit and storage. Our technology keeps data private at all times, even while it’s being used, through a combination of tamper-proof code and secure hardware. Because the data is always encrypted, even somebody with physical access to the storage centre would not be able to extract any information.
                    <br />
                    <br />
                    The privacy-preserving technology used in Moai is the latest generation in confidential computing and has already been tried and tested by financial institutions in the UK and Europe. No personal information is required to use the app and we don’t access your phone’s geolocation.
                </p>
                <br />
                <h5>Supported by innovate UK</h5>
                <p>
                    UKRI is a public body funded by the government to support the development of new ideas. Through Innovate UK, they have provided a series of grants to companies to work on solving the problem of “track and trace” without a breach of privacy.
                </p>
                <br />
                <b>We’d love to discuss how our technology could meet your business requirements. Get in touch at <a href="mailto:team@moaiapp.com">team@moaiapp.com</a>. </b>
            </Container>
        </section >
    );
};

export default About;
