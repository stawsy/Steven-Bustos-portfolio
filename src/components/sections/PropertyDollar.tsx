import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import ImgLogin360 from "../../assets/property-dollar-connect-360-login.jpg";
import ImgAllclients from "../../assets/property-dollar-All-Clients.png";
import ImgNewuser from "../../assets/property-dollar-new-user.png";
import ImgCalltoaction from "../../assets/property-dollar-Call-to-Action.png";
import ImgConnect360 from "../../assets/property-dollar-connect-360.png";

function PropertyDollar() {
  const [index, setIndex] = useState(-1);
  const slides = [
    {
      src: ImgLogin360,
      width: 1920,
      height: 1268,
    },
    {
      src: ImgAllclients,
      width: 1920,
      height: 1177,
    },
    {
      src: ImgNewuser,
      width: 1920,
      height: 1480,
    },
    {
      src: ImgCalltoaction,
      width: 1920,
      height: 1465,
    },
    {
      src: ImgConnect360,
      width: 1920,
      height: 1577,
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
                columns={3}
                onClick={({ index }) => setIndex(index)}
              />
            </div>
          </div>
          <div className="mt-2 p-2 text-end description">
            <h3>Property Dollar</h3>
            <p>Connect 360.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDollar;
