import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage.jsx";
import AddVideogame from "../components/AddVideoGame/AddVideoGame.jsx"
import VideoGameDetail from "../components/VideoGameDetails/VideoGameDetail.jsx"
import HomePage from "../components/HomePage/HomePage.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/videogame" component={AddVideogame} />
          <Route exact path="/videogame/:id" component={VideoGameDetail}/>
          <Route exact path = '/home' component = {HomePage} />
          <Route path="*" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
