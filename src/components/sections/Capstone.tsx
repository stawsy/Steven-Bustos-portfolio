import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgPink from "../../assets/capstone-pink.png";
import ImgBlue from "../../assets/capstone-blue.png";
import ImgBanking from "../../assets/capstone-banking-reconciliation.png";
import ImgDashboard from "../../assets/capstone-dashboard.png";

function Capstone() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: ImgPink,
      width: 1920,
      height: 1080,
    },
    {
      src: ImgBlue,
      width: 1920,
      height: 1080,
    },
    {
      src: ImgBanking,
      width: 1920,
      height: 1080,
    },
    {
      src: ImgDashboard,
      width: 1920,
      height: 1080,
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
                columns={3}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-3 p-2 text-start description col-xl-8 col-md-12">
            <h3>Capstone</h3>
            <p>Medical practice management software. </p>
            <p className="mt-2">
              As the in-house designer, I created and implemented a scalable
              front-end design system for an Angular-based application, starting
              from wire-frame prototypes. I collaborated closely with developers
              to turn design concepts into consistent, production-ready UI using
              HTML and CSS. Working in a local environment, I actively
              contributed to the repository, supporting a structured workflow
              through code reviews, merges, and deployment to production.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Capstone;
