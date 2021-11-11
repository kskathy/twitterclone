import './App.css';

import {BrowserRouter, Route} from "react-router-dom";

import Explore from "./components"
import Home from "./components/HomeScreen/index"
import Landing from "./components/Landing"

import who from "../src/reducers/who"
import tweets from "../src/reducers/tweets"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">

          <Route path={["/twitter/explore"]}>
            <Explore/>
          </Route>

          <Route path={["/twitter/home"]}>
            <Home/>
          </Route>

          <Route path={["/"]} exact={true}>
            <Landing/>
          </Route>



    </div>
      </BrowserRouter>
      </Provider>

  );
}

export default App;
