import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgBackend from "../../assets/TicketSearch-backend-01.jpg";
import ImgFrontend1 from "../../assets/TicketSearch-frontend-01.jpg";
import ImgFrontend2 from "../../assets/TicketSearch-frontend-02.jpg";
import ImgWebsite from "../../assets/TicketSearch-website.jpg";

function TicketSearch() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: ImgBackend,
      width: 1920,
      height: 1066,
    },
    {
      src: ImgFrontend1,
      width: 1920,
      height: 1055,
    },
    {
      src: ImgFrontend2,
      width: 1920,
      height: 1055,
    },
    {
      src: ImgWebsite,
      width: 1388,
      height: 1033,
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
            <h3>TicketSearch</h3>
            <p>Ticketing and venue management software.</p>
            <p className="mt-2">
              I was the in-house designer responsible for implementing an
              agency-developed design system across both the software and
              website front end. The application was built in Angular, and I
              worked closely with the development team to translate designs into
              production using HTML and CSS. Working from a local development
              environment, I contributed code to the repository, which was
              reviewed, merged, and deployed by the development team. In
              addition, I designed and delivered a new company website using
              WordPress.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketSearch;
