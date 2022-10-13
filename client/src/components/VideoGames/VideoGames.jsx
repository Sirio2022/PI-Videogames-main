/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from "react-redux";
import getallvideogames from "../../actions/getallvideogames.js";
import VideoGameCard from "../VideogameCard/VideogameCard.js";


class Videogames extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getallvideogames();
  }

  render() {
    return (
      <div>
        <h4>Componente videogames</h4>
        {this.props.videogames.map((vg) => (
          <VideoGameCard 
          name={vg.name}
          image={vg.image}
          genres={vg.genres}
          rating={vg.rating}
          origin={vg.origin}  />
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
