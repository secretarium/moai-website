import React, { useState, useEffect } from 'react';
import { Key, SCP, Constants } from '@secretarium/connector';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Container from '../../components/container';
import Layout from '../../components/layout';

const scp = new SCP();
const isDev = process.env.NODE_ENV === 'development';

const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
};

type Venue = {
    id: string;
    type: number;
};

const FAQPage: React.FC = () => {

    const router = useRouter();
    const { slug = '' } = router.query;
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string>();
    const [hasInitialisedKey, setHasInitialisedKey] = useState(false);
    const [key, setKey] = useState<any>();
    const [formValues, setFormValues] = useState(initialValues);
    const [registerUser, setRegisterUser] = useState(false);
    const [hasRegistered, setHasRegistered] = useState(false);
    const [hasCheckedIn, setHasCheckedIn] = useState(false);
    const [venueInfo, setVenueInfo] = useState('');
    const [venueType, setVenueType] = useState<number>();

    // Generate key
    useEffect(() => {
        if (!hasInitialisedKey && !key) {
            Key.createKey()
                .then((keyPair: any) => {
                    setKey(keyPair);
                })
                .catch((error: any) => {
                    setError(isDev ? `Key generation error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    console.error(error);
                });
            setHasInitialisedKey(true);
        }
    }, [hasInitialisedKey, key]);

    // Connect to backend
    useEffect(() => {
        async function connectBackend() {
            if (key && scp.state === Constants.ConnectionState.closed) {
                scp.connect('wss://moai.node.secretarium.org', key, 'rliD_CISqPEeYKbWYdwa-L-8oytAPvdGmbLC0KdvsH-OVMraarm1eo-q4fte0cWJ7-kmsq8wekFIJK0a83_yCg==').then(() => {
                    setIsConnected(true);
                }).catch((error) => {
                    setError(isDev ? `Connection error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    setIsConnected(false);
                    console.error(error);
                });
            }
        }
        connectBackend();
    }, [key]);

    // Register user
    useEffect(() => {
        if (isConnected && registerUser) {
            setVenueInfo(slug[0]);
            const query = scp.newTx('moai', 'register-user', `moai-register-${Date.now()}`, {
                firstname: formValues.firstName, lastname: formValues.lastName, phone: formValues.phoneNumber
            });
            query.onExecuted?.(() => {
                setHasRegistered(true);
            });
            query.onError?.((error: any) => {
                setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                console.error('Error', error);
                setIsConnected(false);
            });
            query.send?.()
                .catch((error) => {
                    setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    console.error('Error', error);
                    setIsConnected(false);
                });
        }
    }, [isConnected, registerUser]);

    // Location check-in
    useEffect(() => {
        if (isConnected && registerUser && hasRegistered) {
            const query = scp.newTx('moai', 'check-in', `moai-qr-${Date.now()}`, {
                venue: venueInfo
            });
            query.onExecuted?.(() => {
                setHasCheckedIn(true);
            });
            query.onError?.((error: any) => {
                setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                console.error('Error', error);
                setIsConnected(false);
            });
            query.send?.()
                .catch((error) => {
                    setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    console.error('Error', error);
                    setIsConnected(false);
                });
        }
    }, [isConnected, registerUser, hasRegistered, venueInfo]);

    // Get checked-in venues
    useEffect(() => {
        if (isConnected && hasCheckedIn) {
            const query = scp.newTx('moai', 'get-venues', `moai-venues-${Date.now()}`, { cursor: 0, max: 50 });
            query.onResult?.((result: any) => {
                const type = result.venues.find((venue: Venue) => venue.id === slug[0]);
                setVenueType(type.type);
            });
            query.onError?.((error: any) => {
                setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                console.error('Error', error);
                setIsConnected(false);
            });
            query.send?.()
                .catch((error) => {
                    setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    console.error('Error', error);
                    setIsConnected(false);
                });
        }
    }, [isConnected, hasCheckedIn, slug]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegisterUser(true);
    };

    let composition;

    if (error) {
        composition = <span>{error}</span>;
    } else if (hasCheckedIn) {
        composition = <>
            <span>Successfully checked in!</span>
            <br />
            <br />
            Would you like to answer a short survey to measure factors that affect the spread of COVID-19? If yes, <Link href={`/feedback/${venueType}/${venueInfo}`} passHref><a className="text-pink-200">tap here</a></Link>
        </>;
    } else if (!isConnected) {
        composition = <h3 className="text-2xl md:text-3xl text-gray-700 pb-10">Connecting to Moai...</h3>;
    } else {
        composition = <>
            Prefer not to give your details?
            <br />
            <p className="text-pink-200">Download the app to check in anonymously</p>
            <br />
            <br />
                You can also check in here, but we will need a few details. Don't worry, your data is safe and will be secured and encrypted at all times.
            <br />
            <br />
            <form method="post" onSubmit={handleSubmit}>
                <input onChange={handleInputChange} id="checkin-FIRSTNAME" name="firstName" required className="py-2 px-5 text-xl md:w-1/2 sm:w-full text-center bg-gray-200" placeholder="First name" />
                <br /><br />
                <input onChange={handleInputChange} id="checkin-LASTNAME" name="lastName" required className="py-2 px-5 text-xl md:w-1/2 sm:w-full text-center bg-gray-200" placeholder="Last name" />
                <br /><br />
                <input onChange={handleInputChange} id="checkin-PHONE" name="phoneNumber" required className="py-2 px-5 text-xl md:w-1/2 sm:w-full text-center bg-gray-200" placeholder="Phone number" />
                <br /><br />
                <button id="checkin" className="bg-accent-1 mt-8 py-3 px-8 text-lg rounded-full text-center text-white inline-block" type="submit">
                    Check in
                </button>
            </form>
        </>;
    }

    return (
        <Layout>
            <Head>
                <title>Moai Checkin</title>
            </Head>
            <Container>
                <section className="mt-20 mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-7xl tracking-tighter leading-tight md:pr-8 text-center">
                        Checking in
                    </h1>
                </section>
                <section id="legal" className="text-center mb-20">
                    {composition}
                </section>
            </Container>
        </Layout>
    );
};

export default FAQPage;