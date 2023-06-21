import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>


              <div className="quote-container" style={{ marginTop: "10px" }}>
                <p className="quote-text">
                  {" "}
                  "The only way to do great work is to love what you do."
                </p>
                <p className="quote-author">- Steve Jobs</p>
              </div>
            </div>
          </div>


            
          </div> */}
          <div
            className="image-container"
            style={{ marginLeft: "100px", marginTop: "90px" }}
          >
            <img
              alt="Abinash_Bordoloi"
              src={require("../../assests/images/profile.jpg")}
              className="image-container img"
            ></img>

            </div>
          </div>
          <div className="image-container">
            <img src="src/assets/images/profile.jpg" alt="Your Image"></img>

              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
           
            <FeelingProud theme={theme} />

          </div>
        </div>
      </div>
    </Fade>
  );
}
