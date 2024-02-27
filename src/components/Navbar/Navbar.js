import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { logo } from "../../images";
import Button from "../common/Button/Button";

const Navbar = () => {
  const navItems = [
    { navItem: "Features", to: "features" },
    { navItem: "Presale Alerts", to: "presale-alerts" },
    { navItem: "Networks", to: "networks" },
    { navItem: "About us", to: "about-us" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          className={[classes.navItem, classes.logoContainer].join(" ")}
          to="/"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={logo} alt="#" className={classes.logo} />
        </Link>

        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {navItems.map((el, i) => (
            <Link
              key={i}
              className={classes.navItem}
              to={el.to}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </Link>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            btnPrimary
            size="sm"
            onClick={() => {}}
            className={classes.button}
          >
            Connect<span className={classes.wallet}>Wallet</span>
          </Button>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
