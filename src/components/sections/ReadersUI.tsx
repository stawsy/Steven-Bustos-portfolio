import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgCarnival from "../../assets/readers-carnival-01.jpg";
import ImgRiches from "../../assets/readers-road-to-riches.jpg";
import ImgCruise from "../../assets/readers-cruise-ship.jpg";
import ImgCartoon from "../../assets/readers-carnival-01-cartoon.jpg";
import ImgQuiz from "../../assets/readers-quiz-02.jpg";
import ImgPostsheet1 from "../../assets/readers-postsheet-01.jpg";
import ImgPostsheet2 from "../../assets/readers-postsheet-02.jpg";
import ImgWebad from "../../assets/readers-webad-01.jpg";

function ReadersUI() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: ImgCarnival,
      width: 600,
      height: 521,
    },
    {
      src: ImgRiches,
      width: 600,
      height: 521,
    },
    {
      src: ImgCruise,
      width: 800,
      height: 544,
    },
    {
      src: ImgCartoon,
      width: 800,
      height: 544,
    },
    {
      src: ImgQuiz,
      width: 600,
      height: 521,
    },
    {
      src: ImgPostsheet1,
      width: 1024,
      height: 600,
    },
    {
      src: ImgPostsheet2,
      width: 1024,
      height: 600,
    },
    {
      src: ImgWebad,
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
