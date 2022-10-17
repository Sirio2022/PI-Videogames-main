/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getvideogamebyid from "../../actions/getvideogamebyid";
import s from "./VideoGameDetail.module.css";

export default function VideoGameDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getvideogamebyid(props.match.params.id));
  }, [dispatch]);

  var detail = useSelector((state) => state.videogamedetails);

  return (
    <div className={s.wraper}>
      <div className={s.contarea}>
        <div>
          <h2>{detail.name}</h2>
          <Link to="/home">
            <button className={s.botback}>Home</button>
          </Link>
        </div>
        <br></br>
        <img
          className={s.detimg}
          src={detail.image}
          alt="No img found"
          width="500px"
          heigth="300px"
        />
        <br></br>
        <h3>Description</h3>
        <h5>{detail.description}</h5>

        <div className={s.lineflex}>
          <h2>{`Rating: ${detail.rating}`}</h2>
        </div>

        <div className={s.lineflex}>
          <h4>{`Released date: ${detail.released}`}</h4>
        </div>

        <h4>{`Platforms: ${detail.platforms}`}</h4>

        <h4>{`Genres: ${detail.genres}`}</h4>
      </div>
    </div>
  );
}
