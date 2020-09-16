import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Register: React.FC = () => {
    return (
        <section id="register" className="border-top pt-110 pb-150">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={10}>
                        <div className="register-app-inner text-center">
                            <h2 className="h1">
                                Moai is almost ready.
                            </h2>
                            <h3>
                                Enter your email below and we’ll let you know as soon as it’s launched.
                            </h3>
                            <form name="mc-embedded-subscribe-form" target="_blank" action="https://moaiapp.us17.list-manage.com/subscribe/post?u=1bbe9d3ad8430f833640de63c&id=284f13df99" method="post" id="mc-embedded-subscribe-form">
                                <input id="mce-EMAIL" type="email" name="EMAIL" required className="register-input" placeholder="Enter your email address" />
                                <br /><br />
                                <button id="mc-embedded-subscribe" className="btn" type="submit">
                                    Register for updates
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
