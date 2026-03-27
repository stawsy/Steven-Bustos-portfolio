import EducationInsights from "./sections/EducationInsights";
import JourneyLab from "./sections/JourneyLab";
import DataNSW from "./sections/DataNSW";
import TicketSearch from "./sections/TicketSearch";
import Capstone from "./sections/Capstone";
import PropertyDollar from "./sections/PropertyDollar";
import ReadersUI from "./sections/ReadersUI";

function UserInterface() {
  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-10 col-md-8 col-sm-6 col-xs-12 text-left pt-5 ps-2">
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <EducationInsights></EducationInsights>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <JourneyLab></JourneyLab>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <DataNSW></DataNSW>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <TicketSearch></TicketSearch>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <Capstone></Capstone>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <PropertyDollar></PropertyDollar>
            </div>
          </div>
          <div className="clearfix visible-xs-block"></div>
          <div className="d-flex align-items-start">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-11 col-sm-12">
              <ReadersUI></ReadersUI>
            </div>
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
            </p>
            <p className="mt-2">Wait, you yada yada'd the best part!</p>
            <p className="mt-2">I did mention UI {"\u263A"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInterface;
