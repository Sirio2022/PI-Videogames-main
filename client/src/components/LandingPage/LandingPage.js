import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import getplatforms from "../../actions/getplatforms";
import getgenres from "../../actions/getgenres";
import getallvideogames from "../../actions/getallvideogames";
import sortvideogames from "../../actions/sortvideogames";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getplatforms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getgenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getallvideogames());
  }, [dispatch]);

  function handleSortvideogames(e) {
    dispatch(sortvideogames("asc"));
  }

  return (
    <div className={style.lpcontainer}>
      <Link to="/home">
        <button className={style.but} onClick={handleSortvideogames}>ENTRAR</button>
      </Link>
    </div>
  );
}
