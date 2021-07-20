import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/layout/topNavBar/TopNavbar";
import SideBar from "./components/layout/sidebar/SideBar";
import Card from "./components/Card";
import { Provider } from "react-redux";
import store from "./store";
import TrendingMovies from "./components/TrendingMovies";

function App() {
  const [sidebar, setsidebar] = useState(true);

  const showSidebar = () => setsidebar(!sidebar);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/movies/trending" component={TrendingMovies} />
          </Switch>
          <TopNavbar />
          <Card />
          <SideBar sidebar={sidebar} showSidebar={showSidebar} />

          <div className={sidebar ? "s17" : "s0"}></div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
