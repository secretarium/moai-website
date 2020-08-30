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
                    Moai takes your privacy seriously. To better protect your privacy we provide this privacy policy notice explaining the way your personal information is collected and used.
                </p>
                <h5>Collection of Routine Information</h5>
                <p>
                    This website may track basic information about its visitors. This information includes, but is not limited to, IP addresses, browser details, timestamps and referring pages. None of this information can personally identify specific visitor to this website. The information is tracked for routine administration and maintenance purposes.
                </p>
                <h5>Cookies</h5>
                <p>
                    This website does not use cookies to store information about a visitor’s preferences or history.
                </p>
                <h5>Advertisement and Other Third Parties</h5>
                <p>
                    Moai does not display advertisements and does not collect information to this end.
                </p>
                <h5>Links to Third Party Websites</h5>
                <p>
                    We have included links on this website for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from our own.
                </p>
                <h5>Security</h5>
                <p>
                    The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
                <h5>Changes To This Privacy Policy</h5>
                <p>
                    This Privacy Policy is effective as of August 2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                </p >
                <p>
                    we reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                </p >
                <h5>Contact Information</h5>
                <p>
                    For any questions or concerns regarding the privacy policy, please send us an email to contact@moaiapp.com.
                </p>
            </Container>
        </section >
    );
};

export default Privacy;
