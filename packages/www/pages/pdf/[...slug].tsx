import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import pdf, { CreateOptions } from 'html-pdf';
import QRCode from 'qrcode-svg';
import pageOne from '../../public/assets/posters/page1.svg';
import pageTwo from '../../public/assets/posters/page2.svg';
import { NextPageContext } from 'next';

const componentToPDFBuffer = (component: React.ReactElement) => {
    return new Promise((resolve, reject) => {
        const html = renderToStaticMarkup(component);

        const options: CreateOptions = {
            format: 'A4',
            orientation: 'portrait',
            border: '0mm',
            zoomFactor: '1',
            footer: {
                height: '0mm'
            },
            header: {
                height: '0mm'
            },
            type: 'pdf',
            timeout: 30000
        };

        pdf.create(html, options).toBuffer((err, buffer) => {
            if (err) {
                return reject(err);
            }
            return resolve(buffer);
        });
    });
};

class PDFRenderer extends React.Component {

    static async getInitialProps({ req, res, query }: NextPageContext) {
        const isServer = !!req;

        if (isServer) {
            const buffer = await componentToPDFBuffer(
                <html style={{
                    margin: 0,
                    padding: 0,
                    border: 0
                }}>
                    <body style={{
                        margin: 0,
                        padding: 0,
                        border: 0
                    }}>
                        <div style={{
                            textAlign: 'center',
                            position: 'relative',
                            margin: 0,
                            padding: 0,
                            border: 0,
                            height: '100%',
                            maxHeight: '100%',
                            overflow: 'hidden'
                        }}>
                            <img src={pageTwo} alt="manual" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%'
                            }} />
                        </div>
                        <div style={{
                            textAlign: 'center',
                            position: 'relative',
                            margin: 0,
                            padding: 0,
                            border: 0,
                            height: '100%',
                            maxHeight: '100%',
                            backgroundColor: '#e95c59',
                            overflow: 'hidden'
                        }}>
                            <img src={pageOne} alt="moai" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%'
                            }} />
                            <div dangerouslySetInnerHTML={{
                                __html: new QRCode({
                                    content: `https://moai-app.com/check/${query.slug}`,
                                    padding: 4,
                                    height: 250,
                                    width: 250,
                                    ecl: 'H'
                                }).svg()
                            }} style={{
                                position: 'absolute',
                                top: '35%',
                                width: '100%',
                                height: '30%'
                            }}>
                            </div>
                        </div>
                    </body>
                </html>
            );
            res?.setHeader('Content-disposition', `attachment; filename="moai_qrcode_${Date.now()}.pdf`);
            res?.setHeader('Content-Type', 'application/pdf');
            res?.end(buffer);
        }

        return {};
    }

    render() {
        return (<div>Hello !</div>);
    }
}

export default PDFRenderer;