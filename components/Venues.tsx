import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Venues: React.FC = () => {
    return (
        <section className="venue-app-outer border-top pt-110 pb-150">
            <Container>
                <Row className="justify-content-left">
                    <Col md={10} lg={8}>
                        <div className="venue-app-inner text-left">
                            <h2 className="h1">
                                Set up a location for contact tracing
                            </h2>
                            <h3>
                                Instantly generate an anonymous QR code to allow people to scan into your location quickly. Everything else is handled securely in the app.
                            </h3>
                            <p>
                                <ul>
                                    <li>Your business information stays private </li>
                                    <li>No need to handle anybody’s personal data </li>
                                    <li>Helps keep your location COVID-19 compliant</li>
                                </ul>
                                <b>It only takes a minute to set up secure track and trace for your location</b>
                            </p>
                            <Link href="/codes">
                                <a title="Generate free QR codes" className="btn">
                                    Generate free QR codes
                                </a>
                            </Link>
                        </div>
                    </Col>
                    <Col md={2} lg={4}></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Venues;
