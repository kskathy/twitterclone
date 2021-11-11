import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen"

import who from "../reducers/who";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(who);


const Build = () => {
  return(
      <Provider store={store}>
      <div>
        <Route path="/twitter/explore" exact={true} component={ExploreScreen}/>
        <Route path={["/", "/twitter/home"]}
               exact={true} component={HomeScreen}/>
      </div>
      </Provider>
  )
}
export default Build;
