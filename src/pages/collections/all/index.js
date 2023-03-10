import { Inter } from "next/font/google";
import Header from "../../header";
import CatalogContent from "./CatalogContent";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <main className={inter.className}>
      <Header />
      <CatalogContent />
    </main>
  );
};

export default Page;
