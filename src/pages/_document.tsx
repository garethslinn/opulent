import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="GDS Consultig Ltd" />
                    <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
                    <link rel="icon" href="/icon.ico" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
