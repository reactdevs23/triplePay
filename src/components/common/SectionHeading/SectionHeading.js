import React from "react";
import classes from "./SectionHeading.module.css";
import clsx from "clsx";

const SectionHeading = ({
  children,
  className,
  left,
  textCenter,
  mobileCenter,
  base900,
}) => {
  return (
    <h2
      className={clsx(
        classes.heading,
        className,
        left && classes.left,
        mobileCenter && classes.mobileCenter,
        base900 && classes.base900
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
