import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";
import { Raleway, Shadows_Into_Light_Two } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

const shadowScript = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"], // ✅ only 400 supported
  variable: "--font-shadow",
});

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
