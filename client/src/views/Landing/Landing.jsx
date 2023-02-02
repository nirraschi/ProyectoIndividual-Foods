import React from "react";
import { Link } from "react-router-dom";
import style from "../Landing/Landing.module.css"


export default function Landing() {

    return (
        
        <div className={style.mainContainer}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap" rel="stylesheet"/>
            <div className={style.container} >
                <div className={style.containerLvl3}>
                <h1 className={style.titulo} >Welcome to</h1>
                <h1 className={style.titulo1} >Green Kitchen</h1>
                <p className={style.p}>Browse hundreds of recipes and find your favorite diet</p>
                <Link to="/home" >
                    <button className={style.boton} >
                        ENTER
                    </button>
                </Link>
                </div>
                <img className={style.image} src="https://i.postimg.cc/J0z8JSWm/imagen-landing.png"/> 
                </div>
                
            
        </div>

    )



}