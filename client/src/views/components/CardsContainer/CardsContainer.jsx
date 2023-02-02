import { React, useEffect } from "react";
import { getRecipes } from "../../../redux/actions";
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import style from "./CardsContainer.module.css";
import { Link } from "react-router-dom";
// imagen, nombre, tipo de plato y tipo de dieta


const CardsContainer = () => {

    const dispatch = useDispatch();
    
    const recetas = useSelector(state => state.recipes) //como lo tengo en payload
    
    useEffect(()=>{
        dispatch(getRecipes());
    }, [dispatch]);

    function Cards(){
        
    return recetas.map((receta, i) => (
        <Link to={`/recipes/${receta.id}`} key={i}>
            <Card
            title={receta.title}
            img={receta.img}
            typeDiets={receta.typeDiets}
            healthScore={receta.healthScore}
            />   
        </Link>       
        ))
    }
    return (        
        <div>
            <div className={style.card}>
                {recetas.length !== 0 ? Cards() : "Cargando"}
            </div>
        </div>
    )
}

export default CardsContainer;