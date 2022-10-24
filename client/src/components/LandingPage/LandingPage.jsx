/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import getplarforms from "../../actions/getplatforms";
import getgenres from "../../actions/getgenres";
import getallvideogames from "../../actions/getallvideogames";

export default function LandingPage() {
  const dispatch = useDispatch();

  let allgenres = useSelector((state) => state.genres);
  let allplatforms = useSelector((state) => state.platforms);

  useEffect(() => {
    if (allplatforms.length === 0) dispatch(getplarforms());
  }, [allplatforms.length, dispatch]);

  useEffect(() => {
    if (allgenres.length === 0) dispatch(getgenres());
  }, [allgenres.length, dispatch]);

  useEffect(() => {
    dispatch(getallvideogames());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <a className={style.btn}>
          <span>ENTRAR AL PI VIDEOGAMES</span>
          <em></em>
        </a>
      </Link>
    </div>
  );
}
