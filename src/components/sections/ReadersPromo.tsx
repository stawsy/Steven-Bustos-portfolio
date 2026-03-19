import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ReadersPromo() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-edm-01.jpg",
      width: 600,
      height: 566,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-edm-02.jpg",
      width: 369,
      height: 750,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-edm-03.jpg",
      width: 418,
      height: 850,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-EOFYS.jpg",
      width: 600,
      height: 713,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-beverly-hills.jpg",
      width: 600,
      height: 650,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-beach.jpg",
      width: 600,
      height: 650,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/readers-skyline.jpg",
      width: 600,
      height: 650,
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
            <p>EDM digital marketing.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadersPromo;
