import React from "react";
import footerbg from "../../resources/pattern.svg";
import diamonds from "../../resources/diamonds.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer className=" bg-custom-yellow font-custom2 relative h-auto flex flex-col ">
      {/* footer content div */}
      <div className=" tracking-wide flex flex-col gap-16 md:flex-row justify-center items-center">
        <div className=" md:w-2/5  flex flex-col justify-center items-center text-light">
          <div className="footer-logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLogo%20Ornate.svg?alt=media&token=17255890-cbdc-42c3-b3a2-a5a691e838fe"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div className=" mb-8 text-center">
            <p className=" font-custom1 text-2xl">
              Indian Institute of Technology Ropar
            </p>
          </div>
          <div>
            <p className="font-bold text-xl">Follow Us On</p>
          </div>
          <div className="justify-center flex items-center font-medium mt-2">
            <span className="mx-2 hover:cursor-pointer">
              <a href="https://www.facebook.com/zeitgeist.iitrpr?mibextid=ZbWKwL" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://instagram.com/zeitgeist_iitrpr?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a href="https://twitter.com/Zeitgeist_rpr?t=PM5KFpsToXu7FEZdTJwWlA&s=08" target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/company/zeitgeist-iit-ropar/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://youtube.com/@ZeitgeistIITRopar?feature=shared"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="w-1/3 md:w-1/2 md:flex flex-col ">
            <div className="border-b-2 w-3/5 md:mt-[24px] text-light border-dark-extra">
              <h2 className="my-3 font-semibold text-xl">Links</h2>
            </div>
            <div className="text-lighter my-3 flex flex-col gap-1 font-medium">
              <p>
                <a href="">Home</a>
              </p>
              <p>
                <a href="">Events</a>
              </p>
              <p>
                <a href="">Sponsor</a>
              </p>
              <p>
                <a href="">Schedule</a>
              </p>
              <p>
                <a href="">Team</a>
              </p>
              <p>
                <a href="">FAQs</a>
              </p>
              <p>
                <a href="">T&C</a>
              </p>
            </div>
          </div>
          <div className="w-1/2 md:mt-[24px]  md:w-1/2 md:flex  flex-col ">
            <div className="border-b-2 w-3/5 text-light border-dark-extra">
              <h2 className="my-3 font-semibold text-xl">Contact Us</h2>
            </div>
            <div className="text-lighter my-3 flex flex-col gap-2">
              <p className="font-medium text-lg">Location</p>
              <p className="font-medium">
                Indian Institute of Technology Ropar Rupnagar, Punjab, India
                Pincode: 140001
              </p>
              <p className=" font-medium text-lg">Email</p>
              <p className="font-medium"><a href="mailto:zeitgeist@iitrpr.ac.in">zeitgeist@iitrpr.ac.in</a></p>
              <p className="font-medium text-lg">Phone</p>
              <p className="font-medium">+91-8171162979</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer design div */}

      <div className="my-10">
        <div className="flex w-full overflow-hidden">
          <img src={diamonds} alt="" className="w-full" />
        </div>
        <div className="text-right mt-6 mx-12 text-light">
          <p>Privacy Policy | Copyright @ Zeitgeist 2023</p>
        </div>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  background: url(${footerbg});
  background-size: cover;
  background-position: center;
  background-color: #723e30;
  background-blend-mode: soft-light;
  font-family: "Jost", sans-serif;
  .font-custom1 {
    font-family: "Grenze Gotisch", cursive !important;
  }
  span > a > svg {
    width: 2vmax;
  }
  .my-10 img {
    animation: chain_chalao 2s steps(11) infinite;
    @keyframes chain_chalao {
      from{
        transform: rotateX(0deg);
      }
      to{
        transform: rotateX(360deg);
      }
    }
  }
`;
export default Footer;
