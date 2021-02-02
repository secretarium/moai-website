import React, { useEffect, useState } from 'react';
import { Key, SCP, Constants } from '@secretarium/connector';
import QRCode from 'qrcode-svg';
import Link from 'next/link';

const scp = new SCP();
const isDev = process.env.NODE_ENV === 'development';
const locationTypes = [
    ['012', 'Accommodation. For example, bed and breakfasts and campsites'],
    ['013', 'Childcare In public and private settings'],
    ['014', 'Education Including universities'],
    ['015', 'Events and conference space'],
    ['016', 'Finance and professional service. For example, high street banks and real estate agencies'],
    ['017', 'Medical facility. For example, hospitals, GP practices and veterinary clinics'],
    ['018', 'Non-residential institution. For example, community centres, libraries, crematoria and funeral homes'],
    ['019', 'Office location and workspace'],
    ['020', 'Personal care. For example, hair salons and barbers, spas and beauty salons'],
    ['021', 'Place of worship. For example, churches, synagogues, mosques, temples and meeting rooms'],
    ['022', 'Private event'],
    ['023', 'Recreation and leisure. For example, cinemas, theatres, museums and galleries'],
    ['024', 'Rental / hire locations'],
    ['025', 'Residential care. For example, care and nursing homes'],
    ['026', 'Restaurant, cafe, pub or bar'],
    ['027', 'Retail shops'],
    ['028', 'Sports and fitness facilities. For example, gyms, indoor sports facilities, swimming pools'],
    ['029', 'Transport For example, taxis and waiting rooms'],
    ['030', 'Other']
];

const QRCodeGenerator: React.FC = () => {

    const [hasInitialisedKey, setHasInitialisedKey] = useState(false);
    const [hasShownNotice, setHasShownNotice] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string>();
    const [key, setKey] = useState<any>();
    const [locationType, setLocationType] = useState<number>(-1);
    const [qrCode, setQrCode] = useState<string>();

    useEffect(() => {
        if (hasShownNotice && !hasInitialisedKey && !key) {
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
    }, [hasInitialisedKey, hasShownNotice, key]);

    useEffect(() => {
        async function connectBackend() {
            if (key && scp.state === Constants.ConnectionState.closed && locationType !== -1) {
                scp.connect('wss://ovh-de-lim-2288-1.node.secretarium.org', key, 'rliD_CISqPEeYKbWYdwa-L-8oytAPvdGmbLC0KdvsH-OVMraarm1eo-q4fte0cWJ7-kmsq8wekFIJK0a83_yCg==').then(() => {
                    setIsConnected(true);
                }).catch((error) => {
                    setError(isDev ? `Connection error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    setIsConnected(false);
                    console.error(error);
                });
            }
        }
        connectBackend();
    }, [key, locationType]);

    useEffect(() => {
        if (isConnected && locationType !== -1) {

            const query = scp.newTx('moai', 'generate-venue-id', `moai-qr-${Date.now()}`, {
                type: parseInt(locationTypes[locationType][0])
            });
            query.onResult?.((result: any) => {
                setError(undefined);
                setQrCode(encodeURI(result.id));
            });
            query.onError?.((error: any) => {
                setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                setQrCode(undefined);
                console.error('Error', error);
                setIsConnected(false);
            });
            query.send?.()
                .catch((error) => {
                    setError(isDev ? `Transaction error: ${error?.message?.toString() ?? error?.toString()}` : 'Oops, a problem occured');
                    setQrCode(undefined);
                    console.error('Error', error);
                    setIsConnected(false);
                });
        }
    }, [isConnected, locationType]);

    let composition;

    if (error)
        composition = <span>{error}</span>;
    else if (!hasShownNotice)
        composition = <>
            <h3 className="text-2xl md:text-3xl text-gray-700 pb-10">Before we start here are some things you must know:</h3>
            <h4 className="text-xl lg:text-2xl tracking-tighter pb-4">Each QR code should only be displayed at one location</h4>
            <p className="text-lg leading-7 pb-10">For contact tracing to be effective, it is important that each QR code you generate is only used in one place. You can print a single QR code more than once if you want to display it in more than one place at your location (for example at different entrances).</p>
            <h4 className="text-xl lg:text-2xl tracking-tighter pb-4">If you have more than one location, you’ll get separate QR codes</h4>
            <p className="text-lg leading-7 pb-10">You will get a separate PDF file for every location; each will contain a unique QR code. Please name your PDF files as soon as you download them so you can keep track of which QR code is displayed at which location.</p>
            <h4 className="text-xl lg:text-2xl tracking-tighter pb-4">In case of damage, reprint or generate a new code</h4>
            <p className="text-lg leading-7 pb-10">If your QR code gets damaged, you can reprint the original PDF. Don’t worry if you forget to save it, you can always generate a new QR code instead. Just remember, if you are using the same code in multiple places at one location, make sure to replace all of them.</p>
            <button className="bg-white mt-8 py-3 px-8 text-lg rounded-full text-center text-accent-2 border border-accent-2 inline-block" onClick={() => setHasShownNotice(true)}>I understand</button>
        </>;
    else if (locationType === -1)
        composition = <>
            <h4 className="text-2xl lg:text-3xl tracking-tighter pb-10">What kind of location do you need a QRcode for ?</h4>
            <select className="py-3 px-8 text-lg rounded-full text-center border border-gray-700" value={locationType} onChange={(event) => setLocationType(parseInt(event.currentTarget.value))}>
                <option key={'none'} value={-1}>Select the type of venue</option>
                {locationTypes.map((entity, index) => <option key={index} value={index}>{entity[1]}</option>)}
            </select>
        </>;
    else if (!isConnected)
        composition = <h3 className="text-2xl md:text-3xl text-gray-700 pb-10">Connecting to Moai...</h3>;
    else if (qrCode)
        composition = <>
            <h4 className="text-2xl lg:text-3xl tracking-tighter">Here is a QRCode for your {locationTypes[locationType][1].toLocaleLowerCase()}!</h4>
            <br />
            <br />
            <div className="inline-block" dangerouslySetInnerHTML={{
                __html: new QRCode({
                    content: `https://moai-app.com/check/${qrCode}`,
                    padding: 0,
                    ecl: 'H'
                }).svg()
            }}></div>
            <br />
            <br />
            <Link href={`/pdf/${qrCode}`}>
                <a target="_blank" className="bg-white mt-8 py-3 px-8 text-lg rounded-full text-center text-blue-900 border border-blue-900 inline-block">
                    Download a PDF version
                </a>
            </Link>
        </>;
    else
        composition = isDev ? <pre>
            {JSON.stringify(key)}
        </pre> : <h3 className="text-2xl md:text-3xl text-gray-700 pb-10">Creating Moai art...</h3>;

    return (
        <div className="text-center">
            {composition}
        </div>
    );
};

export default QRCodeGenerator;
