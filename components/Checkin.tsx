import React from 'react';
import { Container } from 'react-bootstrap';

type CheckinProps = {
    code: string;
}

const Checkin: React.FC<CheckinProps> = ({ code }) => {
    return (
        <section className="border-top pt-150 pb-150">
            <Container>
                <h3 className="h1">
                    Checking in
                </h3>
                <br />
                Prefer not to give your details?
                <br />
                <b>Download the app to check in anonymously</b>
                <br />
                <br />
                You can also check in here, but we will need a few details. Don't worry, your data is safe and will be secured and encrypted at all times.
                <br />
                <br />
                First name
                <br />
                Surname
                <br />
                Phone number
                <br />
                <br />
                <a target="_blank" className="btn dl-pdf">Check in</a>
                <br />
                <br />
                {code}
            </Container>
        </section >
    );
};

export default Checkin;
