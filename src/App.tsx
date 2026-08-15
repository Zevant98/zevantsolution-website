import { CurrencyProvider } from "./context/CurrencyContext";
import CustomCursor from "./components/CustomCursor";
import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import OrderForm from "./components/OrderForm";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <CurrencyProvider>
      <div className="luxury-bg relative min-h-screen">
        <div className="noise-texture" />
        <BackgroundFX />
        <CustomCursor />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <HowWeWork />
          <WhyUs />
          <Pricing />
          <OrderForm />
          <Gallery />
          <FAQ />
          <Reviews />
          <Contact />
          <Footer />
        </div>
        <ChatBot />
      </div>
    </CurrencyProvider>
  );
}
