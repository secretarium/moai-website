import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ComparisonVG: React.FC = () => {
    return (
        <section className="border-top pt-110 pb-80 venue-gest-bg">
            <Container>
                <Row className="justify-content-left">
                    <Col md={12} lg={5}>
                        <div className="venue-app-inner">
                            <h2 className="h1">
                                Venues
                            </h2>
                            <h3>
                                Instantly generate a unique QR code to allow your guests to scan into your premises quickly. Everything else is handled securely in the app.
                            </h3>
                            <ul>
                                <li>Reassure your customers </li>
                                <li>Keep your venue compliant</li>
                            </ul>
                            {/* <br />
                            <button className="btn" type="submit">
                                Get your QRCode now
                            </button> */}
                        </div>
                    </Col>
                    <Col md={2} lg={2}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </Col>
                    <Col md={12} lg={5}>
                        <div className="guest-app-inner text-right">
                            <h2 className="h1">
                                Guests
                            </h2>
                            <h3>
                                Scan into venues using their unique QR code. You’ll be notified via the app if there’s any risk you’ve been exposed to COVID-19.
                            </h3>
                            <ul>
                                <li>Stay safe while out and about</li>
                                <li>Keep your personal information private</li>
                            </ul>
                            {/* <br />
                            <button className="btn" type="submit">
                                Download the app now
                            </button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ComparisonVG;
