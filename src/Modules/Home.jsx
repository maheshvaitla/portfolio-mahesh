import React from "react";
import CustomNav from "../Components/NavBar";
import { Container, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import useWindowDimensions from "../utils/dimensionHelper";



const Home = ({ history }) => {
  const { width } = useWindowDimensions();

  

  return (
    <div>
  
      <CustomNav />
      <div
        className="position-absolute"
        style={{
          height: "100vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? "w-50" : ""}`}>
              <div>
                <div className="">
                  <span className="color-customBlueLight h5 font-weight-bold">
                    Hello !
                  </span>
                  <br />
                  <span className="color-customBlue h2 font-weight-bold">
                    I'm Vaitla Mahesh Kumar
                  </span>
                  <br />
                  <span className="color-customBlueLight h4">
                    <span className="font-weight-bold">Full Stack</span>{" "}
                    developer
                  </span>
                  <br/>
                  <span className="color-customBlue h6 font-weight-bold">
                   I'm from Hyderabad
                  </span>
                  <br />
                  
                  <br />
                  <span className="color-customBlueLight h5">
                  A passionate and enthusiastic web developer who loves coding and always ready to learn something new.
                  </span>
                  <br />
                </div>
                <div>
                  <div className="d-flex mt-4">
                  <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1">
            <FontAwesomeIcon size="1x" icon={faPhone} />
            <span>9010984459</span>
          </Button>
          <Button
            className="contact-btns bg-customBlue mr-2 shadow border-0 py-1"
            onClick={() =>
              window.open("https://www.linkedin.com/in/vaitla-mahesh-kumar-81a096125/", "_blank")
            }
          >
            <FontAwesomeIcon size="1x" icon={faLinkedinIn} />
            <span>Linkedin</span>
          </Button>
          <Button
            className="contact-btns bg-customBlue mr-2 shadow border-0 py-1"
            onClick={() =>
              window.open("https://github.com/maheshvaitla", "_blank")
            }
          >
            <FontAwesomeIcon size="1x" icon={faGithub} />
            <span>Github</span>
          </Button>
                    <Button
            className="contact-btns bg-customBlue shadow border-0 py-1 px-2"
            onClick={() =>
              window.open(
                'mailto:maheshvaitla@gmail.com?subject="Hello !"',
                "_blank"
              )
            }
          >
            <FontAwesomeIcon size="1x" icon={faEnvelope} />
            <span>maheshvaitla@gmail.com</span>
          </Button>
                  </div>
                  <br />
                  <Button
                    className="bg-customBlue font-weight-bold shadow border-0"
                    onClick={() =>
                      window.open(
                        'https://drive.google.com/file/d/1T7hsKpBExXT2rrZ9kWW9YQhMvg73tC9y/view?usp=sharing"',
                        "_blank"
                      )
                    }
                  >
                    Resume
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block ">
             
              <Image
              style={{borderRadius:"50px"}}
                src="images/mahesh.jpg"
                thumbnail
                fluid
                className="profilePic"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;