import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { TicketButton } from "../Buttons/TicketButton";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const getMainUser = useSelector((state)=> state.user).result
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 725) {
        setHamburger(false);
      }
    });
  }, []);

  const signIn = ()=>{
    navigate("/register")
  }
  const signOut = ()=>{
    navigate("/")
    dispatch({type: "GET_USER_ACTION", payload : {}})
  }

  return (
    <NavbarContainer>
      <div className={`background ${hamburger ? "visible" : ""}`}>
        <NavLink to={"/events"}>Events</NavLink>
        <NavLink to={"/sponsors"}>Sponsors</NavLink>
        <NavLink to={"/schedule"}>Schedule</NavLink>
        <NavLink to={"/team"}>Team</NavLink>
        <NavLink to={"/faq"}>FAQs</NavLink>
        <NavLink to={"/t&c"}>T&C</NavLink>
      </div>

      <div className="nav-bar">
        <div
          className="hamburger"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          {hamburger ? (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fclose.svg?alt=media&token=12e20f8e-6e7c-4782-bc06-dc63c0f022a6"
              alt=""
            />
          ) : (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fopen.svg?alt=media&token=ff3fc1c5-bac9-4c78-8c5b-68045b956b01"
              alt=""
            />
          )}
        </div>
        <div className="left-nav">
          <NavLink to={"/events"}>Events</NavLink>
          <NavLink to={"/sponsors"}>Sponsors</NavLink>
          <NavLink to={"/schedule"}>Schedule</NavLink>
        </div>
        <NavLink to={"/home"} className="home-button">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Flogo.svg?alt=media&token=837d76d6-62c0-4625-a321-e328e172077e"
            alt=""
            className="logo-bg"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLogo%20Ornate.svg?alt=media&token=17255890-cbdc-42c3-b3a2-a5a691e838fe"
            alt=""
            className="logo"
          />
        </NavLink>
        <div className="right-nav">
          <NavLink to={"/team"}>Team</NavLink>
          <NavLink to={"/faq"}>FAQs</NavLink>
          <NavLink to={"/t&c"}>T&C</NavLink>
          <NavLink>
            <TicketButton
              text={!getMainUser.isVerified ? "SIGN IN" : "SIGN OUT"}
              onclick={!getMainUser.isVerified ? signIn : signOut}
            ></TicketButton>
          </NavLink>
        </div>
        <div className="reg-button">
          <TicketButton
            text={!getMainUser.isVerified ? "SIGN IN" : "SIGN OUT"}
            onclick={!getMainUser.isVerified ? signIn : signOut}
          ></TicketButton>
        </div>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6vmin 1vw;
  z-index: 10;
  .background {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 0;
    transition: all 0.3s ease-out;
    &.visible {
      visibility: visible;
      height: 100vh;
      background: #d1b8a7;
      a {
        opacity: 1;
      }
    }
    a {
      color: var(--lightest, #f8f2d8);
      font-family: "Jost";
      font-size: 32px;
      opacity: 0;
      font-weight: 500;
      transition: all 0.1s ease-out;
      &.active {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          border-radius: 1px;
          background-color: #b48362c8;
        }
      }
    }
  }
  .nav-bar {
    z-index: 1;
    .hamburger {
      display: none;
      > img {
        height: 36px;
      }
      @media screen and (max-width: 725px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .reg-button {
      display: none;
      > img {
        height: 50%;
      }
      @media screen and (max-width: 725px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20vw;
      }
    }
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FNavBg.svg?alt=media&token=a986d55d-03d8-4ecb-ae35-b3e1de4a27ec");
    position: relative;
    width: 100%;
    aspect-ratio: 28.4/1;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 725px) {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FSmallNavBg.svg?alt=media&token=642aae21-0950-4b4b-b981-3779a8a4625c");
      aspect-ratio: 9.3/1;
      justify-content: space-between;
      padding-inline: 10vw;
    }

    .left-nav,
    .right-nav {
      width: 40%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      font-size: clamp(12px, 1.5vmax, 24px);
      color: var(--lightest, #f8f2d8);
      font-family: "Jost";
      font-weight: 500;
      @media screen and (max-width: 725px) {
        display: none;
      }
      a {
        position: relative;
        transition: all 0.1s linear;
        &:hover,
        &.active {
          &::before {
            transform: scaleX(1);
          }
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          border-radius: 2px;
          background-color: #f8f2d8;
          transition: all 0.1s linear;
          transform-origin: center;
        }
      }
    }
    .right-nav {
      a:last-child {
        &::before {
          background-color: transparent;
        }
      }
    }
    button {
      box-shadow: none;
      border: 2px solid var(--darkestt, #723e30e1);
      @media screen and (max-width: 725px) {
        width: 100%;
      }
      span {
        font-weight: 600;
        color: #723e30;
        @media screen and (max-width: 725px) {
          font-size: min(14px, 1.6vmax);
        }
      }
    }
    .home-button {
      position: absolute;
      left: 50%;
      translate: -50%;
      .logo-bg {
        width: 14vw;
        @media screen and (max-width: 725px) {
          width: 25vw;
        }
      }
      .logo {
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        padding: 5% 0 11% 0;
      }
    }
  }
`;
