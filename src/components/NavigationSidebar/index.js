import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return(
      <>
      <div className={`list-group`}>
        <div className={`list-group-item`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-twitter" aria-hidden="true" style={{"color": "white"}}></i></div>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}} >
          <i className="fa fa-home" aria-hidden="true" style={{"color": "white"}}></i> Home</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action list-group-item-action active`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-hashtag" aria-hidden="true"></i> Explore</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-bell" aria-hidden="true" style={{"color": "white"}}></i> Notifications</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-envelope" aria-hidden="true" style={{"color": "white"}}></i> Messages</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-bookmark" aria-hidden="true" style={{"color": "white"}}></i> Bookmarks</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-list" aria-hidden="true" style={{"color": "white"}}></i> Lists</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-user" aria-hidden="true" style={{"color": "white"}}></i> Profile</a>
        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`} style={{"backgroundColor": "rgb(47, 51, 54)",
          "color": "white"}}>
          <i className="fa fa-ellipsis-h" aria-hidden="true" style={{
            "color": "white"}}></i> More</a>
        <a href="../a7/Build/hrefFile.html" style={{"paddingTop": "10px"}}><button className={`btn btn-primary rounded-pill`}>
        Tweet</button></a>
      </div>
      </>
  )
};

export default NavigationSidebar;
