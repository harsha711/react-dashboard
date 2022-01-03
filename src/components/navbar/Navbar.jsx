import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React, { useState } from "react";
import Modal from "./Modal";
import "./Navbar.css";
//import featuredGif2 from "../../featuredGifs/featuredGif2.gif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const featuredAvatar =
    "https://i0.wp.com/nevernoob.com/wp-content/uploads/2014/01/noob.jpg?fit=667%2C476&ssl=1&w=640";

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft logo">Noob dev's</div>
        <div className="topRight">
          <div className="iconsContainer">
            <div className="iconBadge">
              <NotificationsNone />
              <span className="notif">
                <span className="num">2</span>
              </span>
            </div>
            <div className="iconBadge">
              <Language />
            </div>
            <div className="iconBadge">
              <Settings />
            </div>
            <div>
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                featuredAvatar={featuredAvatar}
              ></Modal>
              <img
                src={featuredAvatar}
                className="Avatar"
                alt="Avatar"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
