import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgEdm01 from "../../assets/AICD-edm-01.png";
import ImgEdm02 from "../../assets/AICD-edm-02.png";
import ImgEdm03 from "../../assets/AICD-edm-03.png";
import ImgEdm04 from "../../assets/AICD-edm-04.png";
import ImgEdm05 from "../../assets/AICD-edm-05.png";

function AICD() {
  const [index, setIndex] = useState(-1);
  const slides = [
    { src: ImgEdm01, width: 940, height: 845 },
    { src: ImgEdm02, width: 437, height: 887 },
    { src: ImgEdm03, width: 690, height: 1069 },
    { src: ImgEdm04, width: 437, height: 887 },
    { src: ImgEdm05, width: 437, height: 887 },
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
        <div className="col-12 text-left ps-2">
          <div className="d-flex align-items-start">
            <div className="col-sm-12">
              <ColumnsPhotoAlbum
                photos={slides}
                columns={5}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-3 p-2 text-start description col-xl-8 col-md-12">
            <h3>Australian Institute of Company Directors</h3>
            <p>EDM digital marketing.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AICD;
