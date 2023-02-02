import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({img, title, typeDiets, healthScore}){
    return(
        <div className={style.card}>          
            <img className={style.image} src={img}/>  
            <h3 className={style.title}>{title}</h3>
            <p className={style.p}>Type Diets</p>
            <p className={style.typeDietsParr}> {typeDiets.map(e => e.name + " / ") } </p>
            <div className={style.healthScoreContainer}>  
                <p className={style.healthScoreParr}>Health Score</p>
                <p className={style.healthScoreNum}>{healthScore}</p>
            </div>
            
        </div>
    )
}
export default Card;