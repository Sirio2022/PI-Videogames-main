import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage.jsx";
import VideoGames from "../components/VideoGames/VideoGames.jsx"
import AddVideogame from "../components/AddVideoGame/AddVideoGame.jsx"
import VideoGameDetail from "../components/VideoGameDetails/VideoGameDetail.jsx"
import Page404 from "../components/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/videogames" component={VideoGames} />
          <Route exact path="/addvideogame" component={AddVideogame} />
          <Route exact path="/videogame/:id" component={VideoGameDetail}/>
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
