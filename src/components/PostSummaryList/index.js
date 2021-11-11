import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"
import React from "react";
const PostSummaryList = () => {
  return (

            <div className={`list-group`}>

              {posts.map((p) =>
          <PostSummaryItem post={p}/>
      )}

            </div>
) }
export default PostSummaryList;