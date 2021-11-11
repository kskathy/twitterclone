import React from "react";
const WhoToFollowListItem = (
    {
    who

    }

) => {
  return(
      <>
        <div className={`row`}
             style={{"backgroundColor": "rgb(47, 51, 54)",
               "color": "white"}}>
          <div className={`col-md-12`}>
            <img
                className="wd-follow-img"
                style={{"float":"left","width":"50px","height":"50px","borderRadius":"50%", "marginRight":"10px"}}
                src={who.avatarIcon}  alt="avatarIcon"/>
            <a href="../a7/Build/hrefFile.html">
              <button className={`btn btn-primary rounded-pill`}
                      style={{"float":"right"}}>Follow
              </button>
            </a>
            <span style={{"float":"left"}}><strong>{who.userName}</strong>
              <i className="fa fa-check-circle" aria-hidden="true"></i></span>
            <br></br><span style={{"float":"left"}}>@{who.handle}</span>
          </div>
        </div>
      </>
)
}
export default WhoToFollowListItem;




