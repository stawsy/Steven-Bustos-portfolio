import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgEdm1 from "../../assets/readers-edm-01.jpg";
import ImgEdm2 from "../../assets/readers-edm-02.jpg";
import ImgEdm3 from "../../assets/readers-edm-03.jpg";
import ImgEofys from "../../assets/readers-EOFYS.jpg";
import ImgHills from "../../assets/readers-beverly-hills.jpg";
import ImgBeach from "../../assets/readers-beach.jpg";
import ImgSkyline from "../../assets/readers-skyline.jpg";

function ReadersPromo() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: ImgEdm1,
      width: 600,
      height: 566,
    },
    {
      src: ImgEdm2,
      width: 369,
      height: 750,
    },
    {
      src: ImgEdm3,
      width: 418,
      height: 850,
    },
    {
      src: ImgEofys,
      width: 600,
      height: 713,
    },
    {
      src: ImgHills,
      width: 600,
      height: 650,
    },
    {
      src: ImgBeach,
      width: 600,
      height: 650,
    },
    {
      src: ImgSkyline,
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

      <div className="row mb-2">
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
          <div className="mt-3 p-2 text-start description col-xl-8 col-md-12">
            <h3>Reader's Digest Australia</h3>
            <p>EDM digital marketing.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadersPromo;
