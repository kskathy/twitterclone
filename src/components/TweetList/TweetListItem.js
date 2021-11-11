import React from "react";
import './tweet.css';
import {useDispatch} from "react-redux";


const TweetListItem = ({tweet}) => {

  const dispatch = useDispatch();
  const deleteTweetClickHandler = () => {
    dispatch({type: 'delete-tweet', tweet})
  };
  const likeClickHandler = () => {
    dispatch({type: 'like-tweet', tweet});
  };

  return(
      <li className="list-group-item" style={{backgroundColor: "rgb(47, 51, 54)", color: "white"}}>
        <i onClick={deleteTweetClickHandler}
           className="fa fa-remove fa-pull-right"></i>

        <table>
          <tr>
            <td className="align-text-top">
              <img className="rounded-circle wd-avatar-image" alt={"tweetImage"}
                   src={tweet['logo-image']}/>
            </td>
            <td className="ps-3" style={{width: '100%'}}>

              <span className="fw-bold">{tweet.userName}</span>
              {tweet.verified && <i className="ms-1 fas fa-badge-check"></i>}
              <span className="ms-1 text-secondary">@{tweet.handle}</span>
              <div>
                {tweet.tweet}
              </div>
              {
                tweet.attachments && tweet.attachments.image &&
                <img src={tweet.attachments.image}
                     className="mt-2 wd-border-radius-20px" alt={"tweetImage2"}
                     style={{width: "100%"}}/>
              }
              {
                tweet.attachments && tweet.attachments.video &&
                <iframe width="100%" height="350px"
                        className="mt-2 wd-border-radius-20px"
                        style={{width: "100%"}}
                        src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              }
              {/*{JSON.stringify(tweet)}*/}

              <div className="col"
                   onClick={likeClickHandler}>
                <i className="fa fa-comment-o"
                   style={{color: "white"}}></i>123

                <i className="fa fa-retweet"
                   style={{color: "white", marginLeft: "80px"}}></i>234<span style={{marginLeft: "80px"}}></span>


                {
                  tweet.liked && <i className="fa fa-heart"
                                    style={{color: tweet.liked ? "red": "white"}}></i>
                }
                {
                  !tweet.liked && <i className="fa fa-heart"></i>
                }
                {tweet.stats.likes}
                <i className="fa fa-external-link"
                   style={{color: "white", marginLeft: "80px"}}></i>
              </div>


            </td>
          </tr>
        </table>
      </li>
  );
};

export default TweetListItem;