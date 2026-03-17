import Header from "./components/Header";
import Footer from "./components/Footer";
import UserInterface from "./components/UserInterface";
import Marketing from "./components/Marketing";
import Illustration from "./components/Illustration";
import Print from "./components/Print";
import Motion from "./components/Motion";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>

      {/* Content panel = Start */}

      <div className="content p-2">
        <div className="container-fluid">
          <div className="row mb-5 pt-5">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 text-left">
              <div className="position-sticky end-0 section ">
                <div>
                  <h3 className="mb-4">
                    Hello, I{"\u2019"}m Steve, a Senior Graphic Designer based
                    in Sydney, NSW.
                  </h3>
                  <p className="mb-3">
                    With over 15 years of experience in digital design, I
                    {"\u2019"}
                    ve had the privilege of working on creative projects for
                    leading organisations including Reader
                    {"\u2019"}s Digest, Telstra, Australia Post, and the NSW
                    Government.
                  </p>
                  <p className="mb-3">
                    My work spans concept development, visual storytelling, and
                    user-focused design solutions that bring ideas to life
                    across digital platforms.
                  </p>
                  <p className="mb-3">
                    While digital design is my specialty, I{"\u2019"}m also
                    passionate about music, soccer, and spending quality time
                    with my family — all of which inspire my creativity and keep
                    me grounded.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-10 col-md-8 col-sm-6 col-xs-12 text-left">
              {/* User Interface = Start */}
              <UserInterface></UserInterface>

              {/* Marketing = Start */}
              <Marketing></Marketing>

              {/* Illustration = Start
              <Illustration></Illustration> */}

              {/* Print = Start 
              <Print></Print>*/}

              {/* Motion = Start
              <Motion></Motion> */}
            </div>
          </div>
        </div>
      </div>

      {/* Content panel = End */}

      <Footer></Footer>
    </div>
  );
}

export default App;
