import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";
import { Raleway, Shadows_Into_Light_Two } from "next/font/google";

// ✅ Use only valid weights
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

const shadows = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: "400", // ✅ only available weight
  variable: "--font-shadows",
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
