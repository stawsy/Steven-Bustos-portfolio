import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Illustration() {
  const [index, setIndex] = useState(-1);
  const insights = [
    {
      src: "/src/assets/DoE-insights-dashboard.png",
      width: 1600,
      height: 900,
    },
    {
      src: "/src/assets/DoE-insights-dashboard-LBOTE.png",
      width: 1600,
      height: 900,
    },
    {
      src: "/src/assets/DoE-insights-dashboard-trends.png",
      width: 1600,
      height: 900,
    },
  ];
  const readers = [
    {
      src: "/src/assets/readers-carnival-01.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/src/assets/readers-carnival-02.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/src/assets/readers-carnival-03.jpg",
      width: 1600,
      height: 900,
    },
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

      <div className="row mb-5">
        <div className="col-lg-10 col-md-8 col-sm-6 col-xs-12 text-left pt-5 ps-2">
          <div className="d-flex align-items-start">
            <div className="col-sm-12">
              <RowsPhotoAlbum
                photos={insights}
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="d-flex align-items-start">
            <div className="col-sm-12">
              <RowsPhotoAlbum
                photos={readers}
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mb-5 p-2 text-end description">
            <h3>Insights Hub</h3>
            <p>Department of Customer Service and Department of Education.</p>
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-left">
          <div className="position-sticky end-0 section p-2">
            <h2>User interface & web design</h2>
            <p>
              UI is my current discipline, I design and build interfaces for web
              applications and websites. I enjoy recreating my designs using
              HTML and CSS, and watching them come to life. To break it down, my
              modus operandi is to make things look nice. User-focused and
              mobile-responsive websites are my bread and butter. Also applying
              research, best practices, and end-to-end design implementation,
              yada yada yada...
              <br />
              <br />
              Wait, you yada yada'd the best part!
              <br />
              <br />I did mention UI {"\u263A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Illustration;
