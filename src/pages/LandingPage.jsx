import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <main className="landing-page">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

export default LandingPage;