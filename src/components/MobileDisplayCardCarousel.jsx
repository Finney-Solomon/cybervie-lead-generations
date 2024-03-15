import React, { useEffect, useState } from 'react';

import "./mobile.css";

const MobileDisplayCardCarousel = () => {
  const items = [
    "One on One Training from Industry Experts.",
    "A Perfectly Curated Content-Driven Course which gives you the Great Platform to be The Cyber Security Expert.",
    "Personal Career Guidance to Help you Crack the Interviews.",
    "All Students get Access to the Huge Repository of Real-time Projects and Sample Scenarios created by Industry Experts.",
    "Connect with a diverse community of cybersecurity enthusiasts and professionals globally, fostering collaboration, networking, and knowledge exchange"
  ];

  const [currItem, setCurrItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrItem((prevItem) => (prevItem + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount

  }, [currItem, items.length]);

  const handlePrev = () => {
    setCurrItem((prevItem) => (prevItem - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrItem((prevItem) => (prevItem + 1) % items.length);
  };

  return (
    <>
      <div className="carousel">
        <div className="carouselInner">
          {/* <div className="left" onClick={handlePrev}>
            <ArrowBackIos style={{ fontSize: 30 }} />
          </div> */}
          <div className="center">
            <p>{items[currItem]}</p>
          </div>
          {/* <div className="right" onClick={handleNext}>
            <ArrowForwardIos style={{ fontSize: 30 }} />
          </div> */}
        </div>
      </div>
    </>
  );
}


export default MobileDisplayCardCarousel;
