import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function TicketSearch() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: "/src/assets/TicketSearch-backend-01.jpg",
      width: 1920,
      height: 1066,
      title: "Flamingo",
    },
    {
      src: "/src/assets/TicketSearch-frontend-01.jpg",
      width: 1920,
      height: 1055,
    },
    {
      src: "/src/assets/TicketSearch-website.jpg",
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
            <h3>TicketSearch</h3>
            <p>
              Ticketing and venue management software with the ability to embed
              ticket sales directly into a website via an iframe. It also
              included an operator interface for setting up events and managing
              seating plans, email marketing and ticket controls.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketSearch;
