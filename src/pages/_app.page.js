import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Headers from './headers'
import { Router } from 'next/router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../../styles/globals.css'
import theme from './theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;


  React.useEffect(() => {
    NProgress.configure({ showSpinner: false});
    Router.events.on("routeChangeStart",()=>{
      NProgress.start()
      NProgress.set(0.4)
      
    })
    Router.events.on("routeChangeComplete",()=>{
      NProgress.inc()
      NProgress.done()
    })
    Router.events.on("routeChangeError",()=>{
      NProgress.inc()
      NProgress.done()
    })
    return () => {
      Router.events.off('routeChangeStart')
      Router.events.off('routeChangeComplete')
      Router.events.off('routeChangeError')
    }
  }, []);


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const assetPrefix = process.env.NEXT_PUBLIC_VERCEL_URL || '';
  console.log("enviroment",process.env.NEXT_PUBLIC_VERCEL_URL);
  console.log("enviroment",process.env.IMAGE_URL);
  return (
    <React.Fragment>
      <Head>
        <link rel="shotcut icon" href={assetPrefix +"/favicon.ico"}></link>
        <title>Phone page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Headers />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
