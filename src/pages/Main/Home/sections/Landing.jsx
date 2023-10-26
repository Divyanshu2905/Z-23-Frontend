import React from "react";
import styled from "styled-components";
import { Navbar } from "../../../components/Navbar/Navbar";
function Landing() {
  return (
    <LandingContainer className="main-landing">
      <Navbar />
      <div className="center-logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Flogo.svg?alt=media&token=a8e0f23e-9c7d-4bd8-a2c6-040a3ddeed03"
          alt=""
        />
        <div className="buy-tickets">
          <img
            className="left-lamp"
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FLampLeft.svg?alt=media&token=5e170f6e-e1ec-45a1-ae2d-2177227b9c1b"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fwooden%20board.svg?alt=media&token=b2e1a406-627b-470c-8fd7-fab34864fca2"
            alt=""
          />
          <img
            className="right-lamp"
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FLampRight.svg?alt=media&token=5425b43e-1f11-4182-a31b-9bc96f8b50f6"
            alt=""
          />
        </div>
      </div>
      <div className="godly-rays">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Frays.svg?alt=media&token=50f145c5-94a6-4066-8a8a-e9664eec28a1"
          alt=""
        />
      </div>
    </LandingContainer>
  );
}
const LandingContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FLandingBg.png?alt=media&token=3d8b679b-facb-42c0-b80a-000dc7d2c4d5"),
    #a3724f;
  background-size: cover;
  background-position: center;
  .godly-rays {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    img {
      translate: 0 50%;
      @media screen and (max-width: 768px) {
        translate: 0 0;
      }
      width: 100vw;
      height: 100vh;
      scale: 3;
      animation: mela 0.3s steps(2) infinite;
      @keyframes mela {
        from {
          rotate: -9deg;
        }
        to {
          rotate: 9deg;
        }
      }
      mix-blend-mode: soft-light;
    }
  }
  .center-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buy-tickets {
    display: flex;
    justify-content: center;
    .left-lamp, .right-lamp{
        
    }
  }
`;
export default Landing;
