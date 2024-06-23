import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function CarouselComponent() {
  const [carouselOptions, setCarouselOptions] = useState({
    items: 1, // Show 1 item at a time
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <OwlCarousel className="owl-carousel header-carousel position-relative" {...carouselOptions}>
        <div className="owl-carousel-item position-relative" data-dot="<img src='img/bg7.jpg'>">
          <img className="img-fluid" src="img/bg7.jpg" alt="" />
          {/* ... rest of the slide content  */}
        </div>
        {/* ... other slides */}
      </OwlCarousel>
    </div>
  );
}

export default CarouselComponent; 