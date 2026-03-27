import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgDashboard from "../../assets/DoE-insights-dashboard.png";
import ImgLBOTE from "../../assets/DoE-insights-dashboard-LBOTE.png";
import ImgTrends from "../../assets/DoE-insights-dashboard-trends.png";

function EducationInsights() {
  const [index, setIndex] = useState(-1);
  const insights = [
    { src: ImgDashboard, width: 1178, height: 786 },
    { src: ImgLBOTE, width: 1296, height: 768 },
    { src: ImgTrends, width: 1296, height: 838 },
  ];

  return (
    <>
      <Lightbox
        slides={insights}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
      />

      <div className="row mb-2">
        <div className="col-12 text-left ps-2">
          <div className="d-flex align-items-start">
            <div className="col-sm-12">
              <RowsPhotoAlbum
                photos={insights}
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-3 p-2 text-start description col-xl-8 col-md-12">
            <h3>Education Insights Hub</h3>
            <p>
              This work is live on the{" "}
              <a
                href="https://data.nsw.gov.au/insights/education"
                target="_blank"
              >
                data.nsw.gov.au
              </a>{" "}
              website.
            </p>
            <p className="mt-2">
              A dashboard visualising Department of Education open data.
              Following discovery workshops, a Figma prototype was developed
              that combined the visual styles of both departments. I produced
              the image assets, created a style guide, and collaborated closely
              with the data analyst to translate the design into a fully
              functional Power BI dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationInsights;
