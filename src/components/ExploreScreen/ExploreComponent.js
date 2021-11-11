import PostSummaryList from '../PostSummaryList';
import React from "react";

const ExploreComponent = () => {
  return(
      <>
        <div className={`col-6`}>
          <a href="../a7/Build/hrefFile.html"><i className={`fa fa-cog`}
                                                 style={{"color":"blue",float:"right",fontSize: "2.5em"}}></i></a>
          <div className={`input-group border rounded-pill`}
               style={{width: "90%", backgroundColor: "white"}}>
            <div className={`input-group-prepend col-1`}>
              <button type="button" className={`btn btn-link`}><i
                  className={`fa fa-search`} style={{color:"gray"}}></i></button>
            </div>
            <input type="search" className={`bg-none border-0`}
                   placeholder="Search Twitter"/>
          </div>
          <br></br>
            <ul className={`nav nav-tabs`} id="myTab3" role="tablist">
              <li className={`nav-item`} role="presentation">
                <button className={`nav-link active`} id="for-you3-tab"
                        data-bs-toggle="tab" data-bs-target="#for-you3"
                        type="button" role="tab" aria-controls="for-you3"
                        aria-selected="true">For you
                </button>
              </li>
              <li className={`nav-item`} role="presentation">
                <button className={`nav-link`} id="trending3-tab"
                        data-bs-toggle="tab" data-bs-target="#trending3"
                        type="button" role="tab" aria-controls="trending3"
                        aria-selected="false">Trending
                </button>
              </li>
              <li className={`nav-item`} role="presentation">
                <button className={`nav-link`} id="news3-tab" data-bs-toggle="tab"
                        data-bs-target="#news3" type="button" role="tab"
                        aria-controls="news3" aria-selected="false">News
                </button>
              </li>
              <li className={`nav-item`} role="presentation">
                <button className={`nav-link`} id="sports3-tab"
                        data-bs-toggle="tab" data-bs-target="#sports3"
                        type="button" role="tab" aria-controls="sports3"
                        aria-selected="false">Sports
                </button>
              </li>
              <li className={`nav-item`} role="presentation">
                <button className={`nav-link`} id="entertainment3-tab"
                        data-bs-toggle="tab" data-bs-target="#entertainment3"
                        type="button" role="tab" aria-controls="entertainment3"
                        aria-selected="false">Entertainment
                </button>
              </li>
            </ul>

            <div className={`tab-content`} id="myTabContent3">
              <div className={`tab-pane fade show active`} id="for-you3"
                   role="tabpanel" aria-labelledby="for-you3-tab">
                <img
                    src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                    alt="startship"
                    className={`img-fluid`}/><p style={{
          position: "absolute",
          top: "65%",
          transform: "translateX(5%)",
          fontSize: "40px",
          fontWeight: "bold",
          color: "white"}}>SpaceX's Starship</p>
                  {PostSummaryList()}
              </div>
            </div>
        </div>
  </>
  )
}
export default ExploreComponent;

