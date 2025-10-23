import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";
import { Raleway, Shadows_Into_Light_Two } from "next/font/google";

// ✅ Proper font initialization
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "700"], // Raleway supports multiple weights
});

const shadows = Shadows_Into_Light_Two({
  subsets: ["latin"],
  variable: "--font-shadow",
  weight: "400", // ✅ this font only supports 400
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
