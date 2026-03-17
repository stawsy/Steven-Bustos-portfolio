import AICD from "./sections/AICD";
import ReadersPromo from "./sections/ReadersPromo";

function Marketing() {
  return (
    <>
      <div className="row mb-5 pt-3">
        <div className="col-lg-10 col-md-8 col-sm-6 col-xs-12 text-left ">
          <div className="d-flex align-items-start">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col-md-10 col-sm-12">
              <AICD></AICD>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col-md-10 col-sm-12">
              <ReadersPromo></ReadersPromo>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-left">
          <div className="position-sticky end-0 section p-2">
            <h2>Marketing & promotional design</h2>
            <p>
              High-impact digital, print, and social media marketing collateral
              designed to attract attention, drive engagement, and generate
              leads. Did I mention millennials like myself basically created the
              modern web?
            </p>
            <p className="mt-2">
              Or was it the modern web created millennials?
            </p>
            <p className="mt-2">Either way, your welcome {"\u263A"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketing;
