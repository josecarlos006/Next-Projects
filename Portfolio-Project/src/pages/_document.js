import Document, {
  Html,
  Head,
  NextScript
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => < App {
          ...props
        }
        />,
        enhanceComponent: (Component) => Component,
      });
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Web Site | Dev José Carlos</title>
        </Head>
        <body>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument