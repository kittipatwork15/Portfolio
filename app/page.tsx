import About from "@/components/About";
import Activities from "@/components/Activities";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Navbar /><main id="main-content"><Hero /><About /><Projects /><Skills /><Activities /><Certifications /><Contact /></main><Footer /></>;
}
