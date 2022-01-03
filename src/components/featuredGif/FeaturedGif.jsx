import React from "react";
import "./FeaturedGif.css";
//import featuredGif from "../../featuredGifs/featuredGif2.gif";

export default function FeaturedGif() {
  return (
    <div className="featuredGif">
      <div className="featuredGifTitle">Welcome to this Dashboard</div>
      <div className="featuredGifContianer">
        <img
          src="https://media3.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif?cid=790b7611cc341e94a89919b4a3d8678378633ed415091be2&rid=giphy.gif&ct=g"
          alt="Featured Gif"
          className="featuredGifPreview"
        />
      </div>
    </div>
  );
}
