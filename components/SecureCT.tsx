import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SecureCT: React.FC = () => {
    return (
        <section className="border-top pt-110 pb-150 crowd-bg">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={10}>
                        <div className="secure-app-inner text-center">
                            <h2 className="h1">
                                Secure contact tracing
                            </h2>
                            <h3>
                                Moai doesn’t collect any personal information. It can trace risk of infection without ever knowing who you are or where you’ve been. Protecting identities, keeping people well and allowing businesses to keep their doors open.
                            </h3>
                            <br />
                            <div className="row text-center justify-content-center">
                                <ul className="text-left col-md-10 col-lg-8">
                                    <li><i className="fa fa-check"></i>&nbsp;None of your data is collected</li>
                                    <li><i className="fa fa-check"></i>&nbsp;The government does not have access to your information</li>
                                    <li><i className="fa fa-check"></i>&nbsp;Nobody will be notified if you fall ill with COVID-19</li>
                                    <li><i className="fa fa-check"></i>&nbsp;The app cannot be used to track you while you quarantine</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SecureCT;