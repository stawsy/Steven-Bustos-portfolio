import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgDatansw1 from "../../assets/dataNSW-01.jpg";
import ImgDatansw2 from "../../assets/dataNSW-02.jpg";
import ImgMetadata1 from "../../assets/Metadata---website-1.png";
import ImgMetadata2 from "../../assets/Metadata---website-2.jpg";

function DataNSW() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: ImgDatansw1,
      width: 998,
      height: 2241,
    },
    {
      src: ImgDatansw2,
      width: 948,
      height: 1445,
    },
    {
      src: ImgMetadata1,
      width: 675,
      height: 1087,
    },
    {
      src: ImgMetadata2,
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
