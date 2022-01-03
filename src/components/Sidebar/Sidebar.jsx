import {
  Analytics,
  Assessment,
  AttachMoney,
  Feedback,
  Home,
  Inventory,
  Luggage,
  Mail,
  Message,
  Report,
  SupervisedUserCircle,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarTitle">
          <h3>Dashboard Menu</h3>
        </div>
        <ul className="sidebarList">
          <li className="sidebarElement active">
            <Home className="sidebarIcon" />
            <div className="sidebarElementValue">Home</div>
          </li>
          <li className="sidebarElement">
            <Analytics className="sidebarIcon" />
            <div className="sidebarElementValue">Analytics</div>
          </li>
          <li className="sidebarElement">
            <TrendingUp className="sidebarIcon" />
            <div className="sidebarElementValue">Trending Up</div>
          </li>
        </ul>
        <div className="sidebarTitle">
          <h3>Quick Menu</h3>
        </div>
        <ul className="sidebarList">
          <li className="sidebarElement ">
            <SupervisedUserCircle className="sidebarIcon" />
            <div className="sidebarElementValue">Users</div>
          </li>
          <li className="sidebarElement">
            <AttachMoney className="sidebarIcon" />
            <div className="sidebarElementValue">Transactions</div>
          </li>
          <li className="sidebarElement">
            <Inventory className="sidebarIcon" />
            <div className="sidebarElementValue">Products</div>
          </li>
          <li className="sidebarElement">
            <Assessment className="sidebarIcon" />
            <div className="sidebarElementValue">Reports</div>
          </li>
        </ul>
        <div className="sidebarTitle">
          <h3>Notifications</h3>
        </div>
        <ul className="sidebarList">
          <li className="sidebarElement">
            <Mail className="sidebarIcon" />
            <div className="sidebarElementValue">Mail</div>
          </li>
          <li className="sidebarElement">
            <Feedback className="sidebarIcon" />
            <div className="sidebarElementValue">Feedback</div>
          </li>
          <li className="sidebarElement">
            <Message className="sidebarIcon" />
            <div className="sidebarElementValue">Messages</div>
          </li>
        </ul>
        <div className="sidebarTitle">
          <h3>Staff</h3>
        </div>
        <ul className="sidebarList">
          <li className="sidebarElement">
            <Luggage className="sidebarIcon" />
            <div className="sidebarElementValue">Manage</div>
          </li>
          <li className="sidebarElement">
            <Report className="sidebarIcon" />
            <div className="sidebarElementValue">Reports</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
