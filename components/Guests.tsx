import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Guests: React.FC = () => {
    return (
        <section className="border-top pt-110 pb-150">
            <Container>
                <Row className="">
                    <Col md={2} lg={4}></Col>
                    <Col md={10} lg={8}>
                        <div className="guest-app-inner text-right">
                            <h2 className="h1">
                                Check in without providing personal information
                            </h2>
                            <h3>
                                The secure app traces risk of infection without ever knowing who you are or where you’ve been. Scan into a location using its anonymous QR code, without having to disclose any personal information. If there’s any risk you’ve been exposed to COVID-19, you’ll be notified vie the app.
                            </h3>
                            <br />
                            <p>
                                <ul>
                                    <li>None of your personal data is collected</li>
                                    <li>Does not use GPS or Bluetooth to track you</li>
                                    <li>The government does not have access to your information</li>
                                    <li>The app cannot be used to track you while you quarantine</li>
                                </ul>
                            </p>
                            {/* <Link href="/codes">
                                <a title="Download the app" className="btn">
                                    Download the app
                                </a>
                            </Link> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Guests;
