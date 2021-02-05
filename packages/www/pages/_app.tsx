import React from 'react';
import { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { appWithTranslation } from '../i18n';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'survey-react/survey.css';
import '../styles/index.css';

config.autoAddCss = false;
library.add(faFacebook);

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
    </AnimatePresence>;
};

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp);