import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Philosophy from "./sections/Philosophy";
import Team from "./sections/Team";
import Services from "./sections/Services";
import Work from "./sections/Works";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FAQ from "./sections/FAQ";



export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Philosophy />
        <Team />   
      <Services />
      <Work />
      <Testimonials />
      <FAQ />  
      <Contact />
      <Footer />
    </>
  );
}
