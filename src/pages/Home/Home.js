import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MaximizeYourSavings from "../../components/MaximizeYourSavings/MaximizeYourSavings";
import IntegrationPlugins from "../../components/IntegrationPlugins/IntegrationPlugins";
import Benefits from "../../components/Benefits/Benefits";
import JoinToWaitingList from "../../components/JoinToWaitingList/JoinToWaitingList";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MaximizeYourSavings />
      <IntegrationPlugins />
      <Benefits />
      <JoinToWaitingList />
    </div>
  );
};

export default Home;
