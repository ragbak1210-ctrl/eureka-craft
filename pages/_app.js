import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";
import { Raleway, Shadows_Into_Light_Two } from "next/font/google";

// Raleway: multiple weights
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "700"],
});

// Shadows Into Light Two: only one weight, omit it entirely
const shadows = Shadows_Into_Light_Two({
  subsets: ["latin"],
  variable: "--font-shadow",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${raleway.variable} ${shadows.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
        <CraftyWidget />
      </Layout>
    </div>
  );
}
