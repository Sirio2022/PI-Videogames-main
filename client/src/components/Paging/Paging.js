/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./Paging.module.css";

export default function Paging({
  videogamesPerPage,
  allVideogames,
  paging,
  currentPage,
}) {
  const pageNumbers = [];
  const maxpage = Math.ceil(allVideogames / videogamesPerPage);

  for (let i = 0; i < maxpage; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumbers &&
          pageNumbers.map((number) => {
              return (
                  <li className={style.pagenr} key={number}>
                <a onClick={() => paging(number)}>{number}</a>
              </li>
            );
        })}
        
        <span>{`   Página actual  ${currentPage}`}</span>
       
        
      </ul>
    </nav>
  );
}
