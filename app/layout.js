import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Mobile Tyre Fitting United Kingdom | 24/7 Emergency Service | Call Now",
  description:
    "24/7 Mobile Tyre Fitting in United Kingdom & outskirts. Emergency roadside assistance, ETA from 20 mins. Brand new tyres, TPMS & puncture repair. Call 0330 043 8437 now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="gtm-init" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W92CLXTF');`}
        </Script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <link rel="canonical" href="https://www.mobiletyrestoday.uk/" />
        
        {/* Preload hero image for LCP */}
        <link rel="preload" as="image" href="https://uploads.webspires.co.uk/mtfnwanees/a.png" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mobiletyrestoday.uk/" />
        <meta property="og:image" content="/assets/imgs/optimized/hero-1000.webp" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://uploads.webspires.co.uk" crossOrigin="" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11284691642" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11284691642');
            gtag('config', 'AW-7570768229');

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-11284691642/IcCCCNFQ8cMZELr1-oQq',
                  'value': 1.0,
                  'currency': 'GBP',
                  'event_callback': callback
              });
              gtag('event', 'conversion', {
                  'send_to': 'AW-7570768229/uX3CCOWCg5ocELr1-oQq',
                  'value': 1.0,
                  'currency': 'GBP'
              });
              return false;
            };
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '10978ec4f57b8dee61bf8e1b04463ba3f0e0616d', { region: 'eu' });
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W92CLXTF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
