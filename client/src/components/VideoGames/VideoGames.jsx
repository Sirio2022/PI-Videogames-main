/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from "react-redux";
import getallvideogames from "../../actions/getallvideogames.js";
import VideoGameCard from "../VideogameCard/VideogameCard.js";
import s from "./VideoGames.module.css";

class Videogames extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getallvideogames();
  }

  render() {
    return (
      
      <div className={s.container}>
        {this.props.videogames.map((vg) => (
          <VideoGameCard
            name={vg.name}
            image={vg.image}
            genres={vg.genres}
            rating={vg.rating}
            origin={vg.origin}
            key={vg.id}
            id={vg.id}
          />
        ))}
      </div>
    );
    
  }
  
}

const mapStateToProps = (state) => {
  return {
    videogames: state.videogames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getallvideogames: () => dispatch(getallvideogames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Videogames);
