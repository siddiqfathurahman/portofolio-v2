import { useState, useEffect } from "react";
import Card from "./components/CardStudent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import Contact from "./pages/Contact";
import GithubGraph from "./pages/GithubActivity";
import Hero from "./pages/Hero";
import Profil from "./pages/Profil";
import Showcase from "./pages/Showcase";
import Loading from "./components/Loading"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setIsLoading(false); 
      }, 500); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading fadeOut={fadeOut} />
      ) : (
        <>
          <Hero />
          <Profil />
          <Card />
          <Showcase />
          <GithubGraph />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
