import React from "react";
import classes from "./JoinToWaitingList.module.css";
import clsx from "clsx";
import { joinWaiting } from "../../images";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";
import Button from "../common/Button/Button";

const JoinToWaitingList = () => {
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.imgContainer}>
          <img src={joinWaiting} alt="#" className={classes.img} />
        </div>
        <div className={classes.infoContainer}>
          <SectionHeading left base0 mobileCenter>
            Join to <br className={classes.br} /> Waiting List
          </SectionHeading>

          <Text base0 md mobileCenter>
            Welcome to predictable billing without compromising on quality.
            Tailored to fit your business needs while supporting your growth and
            budget.
          </Text>
          <Button size="md" btnPrimary onClick={() => {}}>
            Join Waiting List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinToWaitingList;
