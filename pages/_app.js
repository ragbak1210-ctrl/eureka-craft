import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <CraftyWidget /> {/* Crafty everywhere */}
    </Layout>
  );
}
