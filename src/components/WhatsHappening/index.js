import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  const tweetClickHandler = () => {
    dispatch({type: 'create-tweet',
      tweet: whatsHappening
    });
    console.log(whatsHappening);
  }

  return(<>
        <img src={"./../../images/react-blue.jpeg"} alt={"profilePic"}
             style={{"float":"left","width":"50px","height":"50px","borderRadius":"50%", "marginRight":"10px"}}></img>
        <textarea style={{"backgroundColor": "black", width: "600px", color: "white"}} value={whatsHappening} placeholder={"What's Happening?"}
            onChange={(event) =>
                setWhatsHappening(event.target.value)}>
        </textarea>
        <br></br>
            <a href="../a7/Build/hrefFile.html"><i className="fa fa-image"
                                                   style={{"color":"blue","fontSize": "1em", float:'left', marginLeft:"73px"}}></i></a>
            <a href="../a7/Build/hrefFile.html"><i className="fa fa-line-chart"
                                                   style={{"color":"blue","fontSize": "1em", float:'left',marginLeft:"10px"}}></i></a>
            <a href="../a7/Build/hrefFile.html"><i className="fa fa-smile-o"
                                                   style={{"color":"blue","fontSize": "1em", float:'left',marginLeft:"10px"}}></i></a>
            <a href="../a7/Build/hrefFile.html"><i className="fa fa-calendar-o"
                                                   style={{"color":"blue","fontSize": "1em", float:'left',marginLeft:"10px"}}></i></a>

            <button onClick={tweetClickHandler} className={`btn btn-primary rounded-pill`} style={{marginLeft:"605px", marginBottom:"20px"}}>
              Tweet
            </button>

      </>
);
}
export default WhatsHappening;

