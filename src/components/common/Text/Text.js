import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";

const Text = ({
  primaryDefault,
  base0,
  base600,
  base900,
  color,
  xs,
  sm,
  md,
  lg,
  xl,
  xl2,
  xl3,
  bold,
  semiBold,
  wFull,
  textCenter,
  mobileCenter,
  textRight,
  textLeft,
  upperCase,
  className,
  opacity,
  mlAuto,
  children,
}) => {
  return (
    <p
      style={{ opacity: opacity, color: color }}
      className={clsx(
        classes.text,
        primaryDefault && classes.primaryDefault,
        base0 && classes.base0,
        base600 && classes.base600,
        base900 && classes.base900,
        xs && classes.xs,
        sm && classes.sm,
        md && classes.md,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        bold && classes.bold,
        mlAuto && classes.mlAuto,
        semiBold && classes.semiBold,
        upperCase && classes.upperCase,
        wFull && classes.wFull,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        textLeft && classes.textLeft,
        mobileCenter && classes.mobileCenter,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
