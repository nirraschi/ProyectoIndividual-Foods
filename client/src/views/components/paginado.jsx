import React from "react";
import style from "./paginado.module.css";

export default function Paginado ({recipesPerPage, allRecipes, paginado}){
    const pageNubers = []

    for(let i=1; i < Math.ceil(allRecipes/recipesPerPage); i++){
        pageNubers.push(i)
    }

    return(
        <nav className={style.navPagination}>
            <ul className={style.paginado}>
            { pageNubers &&
            pageNubers.map(number =>(
                <li className={style.number} key={number}>
                <a className={style.a} onClick={() => paginado(number)}>{number}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
}