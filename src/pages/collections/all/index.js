import { Inter } from "next/font/google";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import CatalogContent from "../../../../components/collections/CatalogContent";
import CookieFooter from "../../../../components/cookiefooter";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <main className={inter.className}>
      <Header />
      <CatalogContent />
      <Footer />
      <CookieFooter />
    </main>
  );
};

export default Page;
