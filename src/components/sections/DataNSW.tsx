import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function DataNSW() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: "/Steven-Bustos-portfolio/src/assets/dataNSW-01.jpg",
      width: 998,
      height: 2241,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/dataNSW-02.jpg",
      width: 948,
      height: 1445,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/Metadata---website-1.png",
      width: 675,
      height: 1087,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/Metadata---website-2.JPg",
      width: 675,
      height: 1087,
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
              <RowsPhotoAlbum
                photos={slides}
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-3 p-2 text-start description col-6">
            <h3>Data.NSW and Metadata.NSW</h3>
            <p>
              The{" "}
              <a href="https://data.nsw.gov.au" target="_blank">
                data.nsw.gov.au
              </a>{" "}
              website is managed by the Department of Customer Service, and also
              is home to the Open Data Portal.
            </p>
            <p className="mt-2">
              The{" "}
              <a href="https://www.metadata.nsw.gov.au/" target="_blank">
                metadata.nsw.gov.au
              </a>{" "}
              website is managed by the Department of Customer Service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataNSW;
