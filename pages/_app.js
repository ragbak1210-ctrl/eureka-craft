import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CraftyWidget from "@/components/CraftyWidget";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Global site layout (Navbar + Footer) */}
      <Layout>
        {/* Page content */}
        <Component {...pageProps} />
      </Layout>

      {/* Crafty appears globally across all pages */}
      <CraftyWidget />
    </>
  );
}

