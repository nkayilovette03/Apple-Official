import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";
import IphoneVideo1 from "./components/IphoneVideo1";

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      {/* <IphoneVideo1 /> */}
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
