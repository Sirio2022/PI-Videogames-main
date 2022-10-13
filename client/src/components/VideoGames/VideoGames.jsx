import React from "react";
import { connect } from "react-redux";
import getallvideogames from "../../actions/getallvideogames.js";

class Videogames extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getallvideogames();
  }

  render() {
    return (
      <>
        <h4>Componente videogames</h4>
      </>
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
