import React from "react";
const PostSummaryItem = ( {
      post
    }
) => {
  return(
      <>

        <a href="../a7/Build/hrefFile.html" className={`list-group-item list-group-item-action`}
           style={{"backgroundColor": "rgb(47, 51, 54)",
        "color": "white"}}>
          <div className={`row`}>
            <div className={`col-md-12`}>
              <img
                  style={{"float":"right","width":"100px","height":"100px", "marginRight":"10px", "borderRadius": "25%"}}
                  src={post.image}  alt="posts"/>

              <span style={{"color":"gray"}}>{post.topic}</span>
              <br></br><span><strong>{post.userName} </strong><i
                  className={`fa fa-check-circle`}
                  aria-hidden="true"></i></span><span
                  style={{"color":"gray"}}><sup> . </sup> {post.time}</span>
                <br></br>

              <span><strong>
                {post.title}
              </strong></span>

                  <br></br><span className={`wd-fg-color-gray`}>{post.tweets}</span>
            </div>
          </div>
        </a>
      </>
  )
}

export default PostSummaryItem;