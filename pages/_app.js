import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Crafty from "@/components/Crafty";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Crafty /> {/* 👈 Appears on all pages */}
    </Layout>
  );
}

export default MyApp;
