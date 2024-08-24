import React from 'react';
import Carousel from './carousel/Carousel';

function App() {

  const sliderItem = [
    {id:1, imgSrc:"https://shorturl.at/q00le"},
    {id:2, imgSrc:"https://shorturl.at/TaYPg"},
    {id:3, imgSrc:"https://shorturl.at/WKMhn"},
    {id:4, imgSrc:"https://shorturl.at/Nj76k"},
    {id:5, imgSrc:"https://shorturl.at/RBRgw"},
    {id:6, imgSrc:"https://shorturl.at/pK9XT"},
    {id:7, imgSrc:"https://rb.gy/9qwwgm"},
    {id:8, imgSrc:"https://rb.gy/krs7ph"},
    {id:9, imgSrc:"https://rb.gy/vjpoui"},
  ]

  const settings = {
    showArrows: true,
    responsive: {
      mobile: {
        breakpoint: 767,
        slidesToShow: 1
      },
      tablet: {
        breakpoint: 1024,
        slidesToShow: 2
      },
      desktop: {
        slidesToShow: 4
      }
    }
  };

  return (
    <>
    <h1>Carousel</h1>
      <Carousel settings={settings} >
        {
          sliderItem.map((slider) => 
            <div key={slider.id}>
              <img src={slider.imgSrc} alt="img" />
            </div>
          )
        }
      </Carousel>
    </>
  );
}

export default App;
