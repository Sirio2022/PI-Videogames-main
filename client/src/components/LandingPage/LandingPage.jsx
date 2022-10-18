/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import getplarforms from "../../actions/getplatforms";
import getgenres from "../../actions/getgenres";
import getallvideogames from "../../actions/getallvideogames";


export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getplarforms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getgenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getallvideogames());
  }, [dispatch]);



  return (
    <div>
      <Link to="/home">
      <a className={style.btn}><span>ENTRAR A LA APP</span><em></em></a>
      </Link>
    </div>
  );
}
