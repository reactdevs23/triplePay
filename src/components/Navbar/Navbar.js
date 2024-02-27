import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { logo } from "../../images";
import Button from "../common/Button/Button";
import Dropdown from "../common/Dropdown/Dropdown";

const Navbar = () => {
  const dropDownRef = useRef(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRoutes = ["service1", "service2", "service3"];
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
          <Link
            className={classes.navItem}
            to="/campaign"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Campaign
          </Link>
          <div ref={dropDownRef}>
            <Dropdown
              label="Service"
              isActive={isDropdownActive}
              setActive={setIsDropdownActive}
              onSelect={(val) => {
                setIsDropdownActive(false);
              }}
              dropdownItems={dropdownRoutes}
              dropdownRef={dropDownRef}
            />
          </div>
          <Link
            className={classes.navItem}
            to="/newsAndBlog"
            onClick={() => setSidebar((prev) => !prev)}
          >
            News & Blog
          </Link>{" "}
          <Link
            className={classes.navItem}
            to="/help"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Help
          </Link>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            btnPrimary
            size="md"
            onClick={() => {}}
            className={classes.button}
          >
            Join <span className={classes.waitingList}>Waiting List</span>
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
