import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/Loader/Loader";
import {motion} from "framer-motion"

import recFrame from "../../resources/rectangle-frames.svg";
import leftmegaphone from "../../resources/Left-MegaPhone.svg";
import leftheadinggrp from "../../resources/Group 3633.svg";
import rightmegaphone from "../../resources/Right-MegaPhone.svg";
import rightheadinggrp from "../../resources/Group 3632.svg";
import { infinity } from "fontawesome";

const Announcement = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getAnnouncement = useSelector((state) => state.announcement).result;
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/announcements")
      .then(async (response) => {
        dispatch({ type: "GET_ANNOUNCEMENT_ACTION", payload: response.data });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnnouncementsContainer className="Announcements">
      <motion.img
        className="leftmegaphone"
        src={leftmegaphone}
        initial={{ scale: 1 }}
        animate={{
          scale: 1.1,
          transition: {
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <img
        className="bgimg"
        src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbg.png?alt=media&token=b1004a2b-3168-47ab-8cbd-ecb148e09c90"
      />
      <img className="recFrame" src={recFrame} />
      <motion.img
        className="rightmegaphone"
        src={rightmegaphone}
        initial={{ scale: 1 }}
        animate={{
          scale: 1.1,
          transition: {
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <div className="heading-container">
        <img className="headinggrp" src={leftheadinggrp} />
        <p className="heading">Announcements</p>
        <img className="headinggrp" src={rightheadinggrp} />
      </div>
      <div className="announcements-container">
        {loading ? (
          <Loader />
        ) : (
          getAnnouncement.map((value, index) => {
            return (
              <div className="bullets" key={index}>
                <ul className="bul">
                  <li>{value.data}</li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    </AnnouncementsContainer>
  );
};

const AnnouncementsContainer = styled.div`
  background-color: #e6d6b5;
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 2.76;
  position: relative;
  align-items: center;
  @media screen and (max-width: 480px) {
    .bullets {
      font-size: 15px;
      padding-left: 0;
      margin: 20px;
    }
    .bgimg {
      height: 100%;
    }

    .recFrame {
      display: none;
    }

    .heading-container {
      margin-top: 10px;
      height: auto;
    }

    .heading {
      font-size: 15px;
    }

    .headinggrp {
      visibility: hidden;
    }

    .rightmegaphone,
    .leftmegaphone {
      width: 50px;
      top: 3%;
    }
  }
  .announcements-container {
    width: 77.61vw;
  }

  .heading-container {
    margin-top: 4.89vw;
    margin-bottom: 1.58vw;
    height: 7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
  }

  .heading {
    color: #723e30;
    font-family: Grenze Gotisch;
    font-size: 5vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 2.6vw;
  }

  .bgimg {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray -36px -353px / 104.762% 289.58% no-repeat;
    object-fit: cover;
    mix-blend-mode: color-burn;
    position: absolute;
    aspect-ratio: 2.76;
    width: 100%;
    overflow: hidden;
    background-repeat: repeat-y;
    z-index: 2;
  }

  .recFrame {
    position: absolute;
    top: 0.66%;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .headinggrp {
    width: 9.45vw;
  }

  .leftmegaphone {
    position: absolute;
    top: 3vw;
    left: 7.14%;
    width: 13.69vw;
  }

  .rightmegaphone {
    position: absolute;
    top: 3vw;
    right: 7.14%;
    width: 13.69vw;
  }

  .bullets {
    color: var(--dark2, #a3724f);
    font-family: Jost;
    font-size: 1.32vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 15px;
    border-bottom: 1px solid var(--dark-extra-2, #b2805c);
  }

  .bul {
    padding-left: 20px;
  }
`;

export default Announcement;
