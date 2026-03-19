import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ReadersUI() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-carnival-01.jpg",
      width: 600,
      height: 521,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-road-to-riches.jpg",
      width: 600,
      height: 521,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-cruise-ship.jpg",
      width: 800,
      height: 544,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-carnival-01-cartoon.jpg",
      width: 800,
      height: 544,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-quiz-02.jpg",
      width: 600,
      height: 521,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-postsheet-01.jpg",
      width: 1024,
      height: 600,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-postsheet-02.jpg",
      width: 1024,
      height: 600,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-webad-01.jpg",
      width: 600,
      height: 1300,
    },
  ];

  return (
    <>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
      />

      <div className="row mb-5">
        <div className="col-12 text-left pt-5 ps-2">
          <div className="d-flex align-items-start">
            <div className="col-sm-12">
              <ColumnsPhotoAlbum
                photos={slides}
                columns={4}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-2 p-2 text-end description">
            <h3>Reader's Digest Australia</h3>
            <p>Promotional mini-sites and data capture pages.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadersUI;
