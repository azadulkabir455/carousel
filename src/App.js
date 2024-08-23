import React from 'react';
import Carousel from './carousel/Carousel';

function App() {

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
        <div>
          <img src="https://shorturl.at/q00le" alt="img" />
        </div>
        <div>
          <img src="https://shorturl.at/TaYPg" alt="img" />
        </div>
        <div>
          <img src="https://shorturl.at/WKMhn" alt="img" />
        </div>
        <div>
          <img src="https://shorturl.at/Nj76k" alt="img" />
        </div>
        <div>
          <img src="https://shorturl.at/RBRgw" alt="img" />
        </div>
        <div>
          <img src="https://shorturl.at/pK9XT" alt="img" />
        </div>
        <div>
          <img src="https://rb.gy/9qwwgm" alt="img" />
        </div>
        <div>
          <img src="https://rb.gy/krs7ph" alt="img" />
        </div>
        <div>
          <img src="https://rb.gy/vjpoui" alt="img" />
        </div>

      </Carousel>
    </>
  );
}

export default App;
