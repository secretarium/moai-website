import React from 'react';
import { Container } from 'react-bootstrap';

const FAQ: React.FC = () => {
    return (
        <section className="border-top pt-150 pb-150">
            <Container>
                <h3 className="h1">
                    Frequently Asked Questions
                </h3>
                <br />
                <h5>How does the app trace me if it doesn’t know where I’ve been?</h5>
                <p>
                    Moai doesn’t require venues to provide any identifying information to generate a QR code. So when you check into place, the app knows you have visited the venue linked to a unique QR code, but it doesn’t know where, or what type of venue it is.
                </p>
                <h5>If you don’t have my personal information, how do you know if I’m at risk?</h5>
                <p>
                    Moai doesn’t need to know who you are to know if you have been close to a potential infection zone. The app only knows the QR code information that you scan in, which is linked to an anonymous venue. If there is a potential exposure risk at any of the venues you have visited, you’ll receive a secure message within the app.
                </p>
                <h5>Who will know if I get COVID-19?</h5>
                <p>
                    Nobody. If a venue finds out they have had a potential exposure of COVID-19, they will trigger an alert via the app. A health professional will communicate via a secure chat platform in the app with anybody who was at the venue at the time of infection. Because none of your personal information, or any information about the venue, is ever taken, the chat handler doesn’t know anything about you, or where you’ve been. All they know is that you may have been exposed.
                </p>
            </Container>
        </section >
    );
};

export default FAQ;
