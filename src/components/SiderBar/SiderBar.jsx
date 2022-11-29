import React from "react";
import avatar from "../../assets/imgs/avatar_2.jpeg";
import glasses from "../../assets/imgs/glasses.png";

export default function SiderBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <h1>HIEU NGUYEN</h1>
        <p>Web Developer</p>
      </div>
      <div className="sidebar__profile">
        <img src={avatar} alt="avatar" />
      </div>
      <ul>
        <li></li>
        <li>
          <span>Name:</span> Nguyễn Minh Hiếu
        </li>
        <li>
          <span>Birthday:</span> 18 October 1997
        </li>
        <li>
          <span>Email:</span> hieumnguyen1810@gmail.com
        </li>
        <li>
          <span>Phone:</span> 0364812936
        </li>
      </ul>
    </div>
  );
}
