/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import getvideogamebyid from "../../actions/getvideogamebyid";
import s from "./VideoGameDetail.module.css";

const VideoGameDetail = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    props.getvideogamebyid(props.match.params.id);
  }, [dispatch]);

  return (
    <div className={s.wraper}>
      <div className={s.contarea}>
        <div>
          <h2>{props.videogamedetails.name}</h2>
          <Link to="/home">
            <button className={s.botback}>Home</button>
          </Link>
        </div>
        <br></br>
        <img
          className={s.detimg}
          src={props.videogamedetails.image}
          alt="No img found"
          width="500px"
          heigth="300px"
        />
        <br></br>
        <h3>Description</h3>
        <h5>{props.videogamedetails.description}</h5>

        <div className={s.lineflex}>
          <h2>{`Rating: ${props.videogamedetails.rating}`}</h2>
        </div>

        <div className={s.lineflex}>
          <h4>{`Released date: ${props.videogamedetails.released}`}</h4>
        </div>

        <h4>{`Platforms: ${props.videogamedetails.platforms}`}</h4>

        <h4>{`Genres: ${props.videogamedetails.genres}`}</h4>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    videogamedetails: state.videogamedetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getvideogamebyid: (id) => dispatch(getvideogamebyid(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoGameDetail);
