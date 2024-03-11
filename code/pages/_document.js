import { Html, Head, NextScript } from "next/document";
import Content from './components/Content';
import Footer from '../pages/components/Footer';
import NavBar from '../pages/components/NavBar'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <NavBar />
        <NextScript />
        <Content />
        <Footer />
      </body>
    </Html>
  );
}
