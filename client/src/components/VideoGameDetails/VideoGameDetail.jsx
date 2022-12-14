/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import getvideogamebyid from "../../actions/getvideogamebyid";
import s from "./VideoGameDetail.module.css";
import { getClean } from "../../actions/getclean";
import deletevideogame from "../../actions/deletevideogame";

export default function VideoGameDetail(props) {
  const dispatch = useDispatch();
  const history = useHistory()

  let { id } = useParams();

  useEffect(() => {
    dispatch(getvideogamebyid(id));
    return () => {
      dispatch(getClean());
    };
  }, [id, dispatch]);

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deletevideogame(id));
    history.push("/home")
  }

  var detail = useSelector((state) => state.videogamedetails);

  if (detail.db) {
    return (
      <div className={s.wraper}>
        <div className={s.contarea}>
          <div>
            <h2>{detail.name}</h2>
            <Link to="/home">
              <button className={s.botback}>Home</button>
            </Link>

            <button className={s.botback} onClick={handleDelete}>
              Eliminar
            </button>
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
  } else {
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
}
