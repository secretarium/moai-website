import React from 'react';
import { Container } from 'react-bootstrap';

const Privacy: React.FC = () => {
    return (
        <section className="border-top pt-150 pb-150">
            <Container>
                <h3 className="h1">
                    Privacy Policy
                </h3>
                <p>
                    Your privacy is literally our main concern, so here is everything you need to know about the way your personal information is collected and used when you interact with the Moai website.
                </p>
                <h5>Collection of Routine Information</h5>
                <p>
                    Like most websites, our website may track basic information about visitors. None of this information can personally identify you as a specific visitor to this website. It is tracked for routine administration and maintenance purposes only. This includes, but is not limited to, IP addresses, browser details, timestamps and referring pages.
                </p>
                <h5>Cookies</h5>
                <p>
                    We do not use cookies to store information about your preferences or history.
                </p>
                <h5>Advertisement and Other Third Parties</h5>
                <p>
                    We do not display advertisements and do not collect information to this end.
                </p>
                <h5>Links to Third Party Websites</h5>
                <p>
                    Sometimes we provide links to other websites. We are not responsible for the privacy policies on these websites and they may differ from our own. Please check them out.
                </p>
                <h5>Security</h5>
                <p>
                    We do everything we can to secure your personal information, but please remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. We promise to do our best to use commercially acceptable means of protecting your personal information, however we cannot guarantee its absolute security.
                </p>
                <h5>Changes To This Privacy Policy</h5>
                <p>
                    This Privacy Policy is effective as of August 2020. If any details of our policy change, this page will be updated, and the changes posted will be effective immediately.<br />
                    We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any major changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                </p >
                <h5>Contact Information</h5>
                <p>
                    For any questions or concerns regarding the Privacy Policy, please send us an email to contact@moaiapp.com.
                </p>
            </Container>
        </section >
    );
};

export default Privacy;
