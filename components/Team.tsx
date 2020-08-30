import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team: React.FC = () => {
    return (
        <section id="register" className="border-top pt-110 pb-150">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={10}>
                        <div className="register-app-inner text-center">
                            <h2>
                                Meet the team behind Moai
                            </h2>
                            <h3>
                                A lovely bunch, we promise
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Team;
