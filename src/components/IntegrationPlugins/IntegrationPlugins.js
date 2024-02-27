import React from "react";

import clsx from "clsx";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";

import {
  integration,
  integrationBg,
  openCart,
  shopify,
  wooCommerce,
} from "../../images";
import classes from "./IntegrationPlugins.module.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const IntegrationPlugins = () => {
  const data = [
    {
      icon: wooCommerce,
      title: "WooCommerce",
      info: "Integrate effortlessly with WooCommerce. Our plugin connects your online store to {process.env.REACT_APP_NAME}, allowing you to accept crypto payments with ease. ",
    },
    {
      icon: openCart,
      title: "OpenCart",
      info: "Unlock the power of crypto for your OpenCart store. Our solution ensures that accepting cryptocurrency is as simple as any traditional payment method.",
    },
    {
      icon: shopify,
      title: "Shopify",
      info: "Bring the future of payment to your Shopify store. Our plugin makes it straightforward to set up and manage crypto payments, giving your customers more ways to pay.",
    },
    {
      icon: wooCommerce,
      title: "WooCommerce",
      info: "Integrate effortlessly with WooCommerce. Our plugin connects your online store to {process.env.REACT_APP_NAME}, allowing you to accept crypto payments with ease. ",
    },
    {
      icon: openCart,
      title: "OpenCart",
      info: "Unlock the power of crypto for your OpenCart store. Our solution ensures that accepting cryptocurrency is as simple as any traditional payment method.",
    },
    {
      icon: shopify,
      title: "Shopify",
      info: "Bring the future of payment to your Shopify store. Our plugin makes it straightforward to set up and manage crypto payments, giving your customers more ways to pay.",
    },
    {
      icon: openCart,
      title: "OpenCart",
      info: "Unlock the power of crypto for your OpenCart store. Our solution ensures that accepting cryptocurrency is as simple as any traditional payment method.",
    },
    {
      icon: shopify,
      title: "Shopify",
      info: "Bring the future of payment to your Shopify store. Our plugin makes it straightforward to set up and manage crypto payments, giving your customers more ways to pay.",
    },
  ];

  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.leftSide}>
          <SectionHeading base0 left>
            INTEGRATION PLUGINS
          </SectionHeading>

          <Text md base0>
            Welcome to predictable billing without compromising on quality.
            Tailored to fit your business needs while supporting your growth and
            budget.
          </Text>
        </div>
        <img src={integration} alt="#" className={classes.img} />
      </div>
      <div className={classes.sliders}>
        <Splide
          options={{
            autoWidth: true,
            perPage: 2.2,
            perMove: 3,
            drag: true,
            pagination: false,
            arrows: false,
            type: "loop",
            gap: "15px",
            start: 0,

            breakpoints: {
              991: {
                perPage: 2.2,
              },
              450: {
                gap: "10px",
              },
            },
          }}
        >
          {" "}
          {data.map((el, i) => (
            <SplideSlide key={i}>
              <div className={classes.card} key={i}>
                <div className={classes.infoContainer}>
                  <img src={el.icon} alt="#" className={classes.icon} />
                  <div>
                    <Text xl3 semiBold base0>
                      {el.title}
                    </Text>{" "}
                    <Text xl base0 className={classes.info}>
                      {el.info}
                    </Text>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>{" "}
        <img src={integrationBg} alt="#" className={classes.bgImg} />
      </div>
    </section>
  );
};

export default IntegrationPlugins;
