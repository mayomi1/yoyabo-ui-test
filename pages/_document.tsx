import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class AppDocument extends Document {
  public static async getInitialProps (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    let initialProps = {} as DocumentInitialProps;
    if(Document.getInitialProps) {
      initialProps = await Document.getInitialProps(ctx);
    }

    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Yoyabo" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins&family=Roboto&display=swap"
            rel="stylesheet"
          />

        </Head>

        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
