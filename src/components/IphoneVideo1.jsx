import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IphoneVideo1 = () => {
  const sideImageRef = useRef(); // Reference for the side-angle image
  const frontImageRef = useRef(); // Reference for the front-angle image

  useEffect(() => {
    // Create a smooth fade and transition between the two images
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".phone-section", // Section to track scrolling
          start: "top center", // Start animation when the section enters the viewport
          end: "bottom center", // End animation when the section leaves the viewport
          scrub: true, // Smooth animation tied to scrolling
        },
      })
      .to(sideImageRef.current, {
        opacity: 0, // Fade out the side image
        duration: 1, // Duration of the fade
        ease: "power1.inOut",
      })
      .to(
        frontImageRef.current,
        {
          opacity: 1, // Fade in the front image
          duration: 1, // Duration of the fade
          ease: "power1.inOut",
        },
        "<"
      ); // Sync the two animations
  }, []);

  return (
    <div className='scroll-container'>
      {/* Title Section */}
      <div className='section'>
        <div className='mt-0 mb-0 pl-24'>
          <img
            src='/assets/images/iphoneVideo1-header.jpg'
            alt='iPhone Title'
            className='iphone'
          />
        </div>
      </div>

      {/* Phone Section with Two Images */}
      <div className='phone-section'>
        {/* Side Angle Image */}
        <img
          ref={sideImageRef}
          src='/assets/images/hand-holding-iphone2.jpg' // Replace with your side-angle image
          alt='Side Angle iPhone'
          className='iphone side-image'
        />

        {/* Front Angle Image */}
        <img
          ref={frontImageRef}
          src='/assets/images/hand-holding-iphone.jpg' // Replace with your front-angle image
          alt='Front Angle iPhone'
          className='iphone front-image'
          style={{ opacity: 0 }} // Initially hidden
        />
      </div>
    </div>
  );
};

export default IphoneVideo1;
