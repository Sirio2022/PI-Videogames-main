import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.lpcontainer}>
        <Link to="/home">
          <button className={style.but}>ENTRAR</button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
