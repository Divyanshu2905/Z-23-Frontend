import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import styled from 'styled-components'

import reel from "../resources/reelSponsorBg.svg"

export const Sponsors = () => {
  return (
    <SponsorContainer>
      <Navbar></Navbar>
      <div className="main">
        <div className="heading">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowL.svg?alt=media&token=b901daf4-0523-4d18-83e3-3b47ac3c135d"
            alt=""
          />
          <span>Our Sponsors</span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowR.svg?alt=media&token=251b9fca-c871-4e00-80d5-3ee33b695145"
            alt=""
          />
        </div>
        <div class="sponsor-slideshow">
          <div class="mover-1"></div>
          <div class="mover-2"></div>
        </div>
      </div>
    </SponsorContainer>
  );
}

const SponsorContainer = styled.div`
  background-color: #c8b897;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FEventsPageBg.png?alt=media&token=45e2f985-febe-495a-ab11-090c40d08761");
  background-size: cover;
  background-blend-mode: overlay;
  width: 100vw;
  height: 100vh;
  animation: flicker 0.8s steps(3) infinite;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > .main {
    position: relative;
    padding: 2vh 0vw;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
    > .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img {
        display: flex;
        align-items: center;
        width: 10vw;
        max-width: 160px;
        min-width: 80px;
      }
      span {
        color: #723e30;
        font-family: "Oleo Script";
        font-size: max(4vw, 32px);
        font-weight: 400;
      }
    }
    > .sponsor-slideshow {
      height: 50vh;
      width: 100vw;
      margin: 0 auto;
      position: relative;
      /* overflow: hidden; */
      transform: translate3d(0, 0, 0);
      > div {
        height: 200px;
        width: 200%;
        background: url(${reel});
        background-repeat: repeat-x;
        background-position: center;
        position: absolute;
        left: 0;
        transform: translate3d(0, 0, 0);
        &.mover-2{
          animation: moveSlideshow 15s ease-in-out infinite alternate-reverse;
          bottom: 0;
        }
        &.mover-1{
          animation: moveSlideshow 17s ease-in-out infinite alternate-reverse;
          top: 0;
        }
      }
    }
  }
  @keyframes moveSlideshow {
    100% {
      transform: translateX(-50%);
    }
  }
  @keyframes flicker {
    0%,
    100% {
      background-color: #c8b897;
    }
    50% {
      background-color: #c8b897c3;
    }
  }
`;