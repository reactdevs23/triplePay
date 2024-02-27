import React from "react";
import classes from "./MaximizeYourSavings.module.css";
import clsx from "clsx";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";
import { GoArrowUpRight } from "react-icons/go";
import {
  calender,
  crypto,
  instantPayout,
  mazimizeYourSavingBg,
  wallet,
} from "../../images";

const MaximizeYourSavings = () => {
  const data = [
    {
      icon: wallet,
      title: "Static Wallet Addresses",
      info: "Take control of your payments with our static wallet addresses. Each address is uniquely linked to a customer, eliminating confusion and ensuring that funds always reach their intended destination.",
    },
    {
      icon: calender,
      title: "Fixed Monthly Usage Costs",
      info: "Say goodbye to unpredictable transaction fees. Our fixed monthly usage costs mean you pay one flat rate to access all our premium features — simplicity and savings combined.",
    },
    {
      icon: crypto,
      title: "Self-Listing Capabilities for Cryptocurrencies",
      info: "Embrace the full potential of crypto payments. With TriplePay, you can self-list any ERC20 token, opening up a world of possibilities for receiving payments in the currency that best suits your business.",
    },
    {
      icon: instantPayout,
      title: "Instant Payout Section",
      info: "Transform your crypto into cash instantly. With TriplePay, you're always just a few clicks away from converting your cryptocurrency into your local currency and transferring it directly into your account. Fast, fluid, and secure — liquidity on your terms.",
    },
  ];
  return (
    <section className={classes.mainWrapper}>
      {" "}
      <div className={classes.header}>
        <h3 className={classes.heading}>FUTURE FINANCE</h3>{" "}
        <div className={classes.circle}></div>
        <h3 className={classes.heading}>FUTURE FINANCE</h3>{" "}
        <div className={classes.circle}></div>
        <h3 className={classes.heading}>FUTURE FINANCE</h3>{" "}
        <div className={classes.circle}></div>
        <h3 className={classes.heading}>FUTURE FINANCE</h3>{" "}
      </div>
      <section className={classes.wrapper}>
        <div className={clsx("container", classes.container)}>
          <div className={classes.leftSide}>
            <SectionHeading base0 left>
              MAXIMIZE YOUR SAVINGS
            </SectionHeading>

            <Text md base0>
              Welcome to predictable billing without compromising on quality.
              Tailored to fit your business needs while supporting your growth
              and budget.
            </Text>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.learnMore}
            >
              Learn More <GoArrowUpRight className={classes.arrow} />
            </a>
          </div>
          <div className={classes.rightSide}>
            {data.map((el, i) => (
              <div className={classes.card} key={i}>
                <img src={el.icon} alt="#" className={classes.icon} />
                <div className={classes.infoContainer}>
                  <Text xl3 semiBold base0>
                    {el.title}
                  </Text>{" "}
                  <Text xl base0>
                    {el.info}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={mazimizeYourSavingBg} alt="#" className={classes.bgImg} />
      </section>
    </section>
  );
};

export default MaximizeYourSavings;
