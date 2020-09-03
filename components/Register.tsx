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
                                Pop your email below and stay tuned<br />about the release of Moai
                            </h3>
                            <form>
                                <input required className="register-input" placeholder="Enter your email address" />
                                <br /><br />
                                <button className="btn" type="submit">
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
