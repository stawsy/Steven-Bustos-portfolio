import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Capstone() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: "/Steven-Bustos-portfolio/src/assets/capstone-pink.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/capstone-blue.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/capstone-banking-reconciliation.png",
      width: 1920,
      height: 1080,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/capstone-dashboard.png",
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

      <div className="row mb-5">
        <div className="col-12 text-left pt-5 ps-2">
          <div className="d-flex align-items-start">
            <div className="col-sm-12">
              <ColumnsPhotoAlbum
                photos={slides}
                columns={2}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-3 p-2 text-start description col-6">
            <h3>Capstone</h3>
            <p>Medical practice management software. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Capstone;
