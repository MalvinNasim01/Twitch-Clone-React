import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h5>FOLLOWED CHANNELS</h5>
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
        name="Ninja"
        followers="16.1M followers"
      />
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/6da05a807465f759-profile_image-150x150.jpeg"
        name="codyko"
        followers="174K followers"
      />
      <h5>RECOMMENDED CHANNELS</h5>
      <Channel
        avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/29604ca9-7113-4d9e-aa9e-6d6d496ef2e8-profile_image-70x70.jpg"
        name="noelmiller"
        followers="374K followers"
      />
      <p className="sidebar__topShowMore">Show More</p>
    </div>
  );
}

export default Sidebar;
