import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function JourneyLab() {
  const [index, setIndex] = useState(-1);
  const jlab = [
    {
      src: "/Steven-Bustos-portfolio/src/assets/JL-Early-childhood-start.jpg",
      width: 1440,
      height: 1959,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/JL-Expected-Costs-Historic-pathways.png",
      width: 1440,
      height: 4130,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/JL-Expected-Costs-ID-characteristics.jpg",
      width: 1440,
      height: 3279,
    },
    {
      src: "/Steven-Bustos-portfolio/src/assets/JL-Homelessness-pathways-overview.png",
      width: 1440,
      height: 2195,
    },
  ];

  return (
    <>
      <Lightbox
        slides={jlab}
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
                photos={jlab}
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-3 p-2 text-start description col-8">
            <h3>Journey Lab</h3>
            <p>
              This work is live on the{" "}
              <a
                href="https://data.nsw.gov.au/data-tools/datapassport/journey-lab-tools"
                target="_blank"
              >
                data.nsw.gov.au
              </a>{" "}
              website, but not publically available.
            </p>
            <p className="mt-2">
              A dashboard visualising insights from the Human Services dataset.
              Following initial discovery meetings, a Figma prototype was
              developed to meet the brief of presenting the data in a format
              that felt more like a website than a traditional dashboard. I
              produced the image assets, developed a style guide, and worked
              closely with the data analyst to translate the design into a fully
              functional Power BI dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default JourneyLab;
