import React from "react";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { heroBottomIcon, heroMobile, heroTopIcon, qrCode } from "../../images";
import Text from "../common/Text/Text";
import Button from "../common/Button/Button";

const HeroSection = () => {
  const handleButton = () => {};
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container paddingTop ")}>
        <h1 className={classes.heading}>
          Make It Easier To Manage Your Money{" "}
          <img src={heroTopIcon} alt="#" className={classes.topIcon} />
        </h1>{" "}
        <div className={classes.content}>
          <div className={classes.imgContainer}>
            <div className={classes.imgWrapper}>
              <img src={heroMobile} alt="#" className={classes.img} />
              <img
                src={heroBottomIcon}
                alt="#"
                className={classes.bottomIcon}
              />
            </div>
          </div>

          <div className={classes.infoContainer}>
            <div className={classes.infoAndButton}>
              <Text base0 xl2 className={classes.info}>
                In the world where innovation is the heartbeat of success
                Brandname emerges as a transformative
              </Text>
            </div>
            <div className={classes.line}></div>
            <div className={classes.qrCodeContainer}>
              <Text md base0 className={classes.qrCodeInfo}>
                Pre-register to get the app when it is available
              </Text>
              <img src={qrCode} alt="#" className={classes.qrCode} />
            </div>
            <div className={classes.buttonContainer}>
              <Button btnPrimary size="md" onClick={handleButton}>
                Join Waiting List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
