import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";
import { Raleway, Shadows_Into_Light_Two } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const shadow = Shadows_Into_Light_Two({ subsets: ["latin"], variable: "--font-shadow" });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${raleway.variable} ${shadow.variable} font-raleway bg-white text-black`}>
      <Layout>
        <Component {...pageProps} />
        <CraftyWidget />
      </Layout>
    </div>
  );
}
