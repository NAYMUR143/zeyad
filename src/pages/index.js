import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import CookieFooter from "./cookiefooter";
import ViewCollection from "./viewcollection";
import StickyCollection from "./stickycollection";
import RelatedViewCollection from "./relatedviewcollection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>owl</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Header />
      </main>

      <ViewCollection />
      <StickyCollection />
      <RelatedViewCollection />
      <Footer />
      <CookieFooter />
    </>
  );
}
