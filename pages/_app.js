import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";
import { Raleway, Shadows_Into_Light_Two } from "next/font/google";

// ✅ Add proper weight for Shadows Into Light Two
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const shadow = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: "400", // ✅ only available weight
  variable: "--font-shadow",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${raleway.variable} ${shadows.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
        <CraftyWidget /> {/* Keep Crafty visible on all pages */}
      </Layout>
    </div>
  );
}
