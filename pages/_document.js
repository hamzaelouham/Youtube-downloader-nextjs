import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const originalRenderPage = ctx.renderPage;

  //     // Run the React rendering logic synchronously
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         // Useful for wrapping the whole react tree
  //         enhanceApp: (App) => App,
  //         // Useful for wrapping in a per-page basis
  //         enhanceComponent: (Component) => Component,
  //       });

  //     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //     const initialProps = await Document.getInitialProps(ctx);

  //     return initialProps;
  //   }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="downlaod your favorite youtute videos faster"
          />
          <meta name="theme-color" content="#fff" />
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
