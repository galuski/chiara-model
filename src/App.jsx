import { useEffect, useState } from "react";
import { Carousel } from "./cmps/Carousel"
import { Header } from "./cmps/Header"

import carouselData from "./data/carousel.json";


function App() {
  const [slides, setSlides] = useState(
    window.innerWidth <= 768 ? carouselData["slides-mobile"] : carouselData.slides
  );

  useEffect(() => {
    const handleResize = () => {
      setSlides(window.innerWidth <= 768 ? carouselData["slides-mobile"] : carouselData.slides);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Carousel data={slides} />
      </main>
    </>
  )
}

export default App
