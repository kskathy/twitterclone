import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state);

  return (<>

        <ul className={`list-group`}>
          <li className={`list-group-item`} style={{"backgroundColor": "rgb(47, 51, 54)",
            "color": "white"}}><strong>Who to follow</strong></li>
          <li className={`list-group-item`} style={{"backgroundColor": "rgb(47, 51, 54)",
            "color": "white"}}>
            {
              who.map((who) =>

                  <WhoToFollowListItem who={who}/>
              )
            }
          </li>
        </ul>
      </>
  ); }
export default WhoToFollowList;

