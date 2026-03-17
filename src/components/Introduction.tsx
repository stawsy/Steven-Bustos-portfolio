import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

function Introduction() {
  const [alertVisible1, setAlertVisibility1] = useState(false);
  const [alertVisible2, setAlertVisibility2] = useState(false);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-5 col-xs-12 text-center p-3">
            <Button color="cloud" onClick={() => setAlertVisibility1(true)}>
              Who am I?
            </Button>
            {alertVisible1 && (
              <Alert color="danger" onClose={() => setAlertVisibility1(false)}>
                <div>
                  <p className="mb-0">
                    Hello, I{"\u2019"}m Steven, a Senior Graphic Designer based
                    in Sydney, NSW.
                    <br />
                    <br />
                    With over 15 years of experience in digital design, I
                    {"\u2019"}ve had the privilege of working on creative
                    projects for leading organisations including Reader
                    {"\u2019"}s Digest, Telstra, Australia Post, and the NSW
                    Government.
                  </p>
                </div>
              </Alert>
            )}
          </div>
          <div className="col-lg-2 col-xs-12"></div>
          <div className="col-lg-5 col-xs-12 text-center p-3">
            <Button color="cloud" onClick={() => setAlertVisibility2(true)}>
              What I do?
            </Button>
            {alertVisible2 && (
              <Alert color="danger" onClose={() => setAlertVisibility2(false)}>
                <div>
                  <p className="mb-0">
                    My work spans concept development, visual storytelling, and
                    user-focused design solutions that bring ideas to life
                    across digital platforms.
                    <br />
                    <br />
                    While digital design is my specialty, I{"\u2019"}m also
                    passionate about music, soccer, and spending quality time
                    with my family — all of which inspire my creativity and keep
                    me grounded.
                  </p>
                </div>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
