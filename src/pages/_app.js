import Footer from "@/components/common/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div>

    <Navbar />
     <Component {...pageProps} />

     <Footer />
  </div>
}
