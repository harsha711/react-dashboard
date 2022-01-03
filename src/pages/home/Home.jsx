import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedGif from "../../components/featuredGif/FeaturedGif";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";

export default function Home() {
  return (
    <div className="homepage">
      <FeaturedGif />
      <FeaturedInfo />
      <Chart />
    </div>
  );
}
