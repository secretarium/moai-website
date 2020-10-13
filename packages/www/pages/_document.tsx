import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
                </Head>
                <body className="overflow-x-hidden" style={{
                    color: '#213963'
                }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
