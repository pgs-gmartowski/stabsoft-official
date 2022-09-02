import Head from 'next/head';
import 'normalize.css';
import Script from 'next/script';

function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Stabsoft - Webdesign, Grzegorz Martowski, projekty stron internetowych, tworzenie stron internetowych,
          tworzenie serwisów internetowych,
          projektowanie stron, cms, portfolio, blog, serwisy WWW, Wrocław ul.Kokosowa 1/16, strony WWW na zamówienie,
          zarządzanie www, szablony, cięcie do
          PSD, Wordpress CMS, Wrocław strony WWW, tworzenie sklepów internetowych, skNlepy internetowe Wrocław
          projekty</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Stabsoft, Grzegorz Martowski" />
        <meta name="copyright" content="2022 Stabsoft Wrocław" />
        <meta name="description" content="Projektowanie stron internetowych Wrocław, szablony stron WWW, podpięcie pod system zarządzania treścią CMS,
              projekty stron na szablonach Wordpress, projekty stron zgodne z RWD - Responsive Web Design, Webmastering, Webdesign, Webdevelopment,
              strony internetowe firm, prywatne, blogi, portfolia, strony WWW na zamówienie" />
        <meta name="keywords" content="Projektowanie stron WWW, strony internetowe Wrocław, projekty serwisów WWW Wrocław, projektowanie stron internetowych
              Wrocław, projekty stron WWW Wrocław, strony prywatne, blogi, portfolia, strony WWW dla firm, Stabsoft Wrocław" />
        <meta name="robots" content="index,follow" />
        <meta name="googlepray" content="Google please rank my site well" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XGW6SXZZTS" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `
                window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XGW6SXZZTS');
          `
        }

      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default App
