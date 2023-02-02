import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import style from "./Detail.module.css"

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getDetail(id));

    },[dispatch])

    const myRecipe = useSelector(state => state.detail) 

    return(
        <div>           
        { 
            myRecipe.length>0 ?
            <div className={style.contenedor}>
                <div className={style.contenedorImagen}>                    
                    <img className={style.image} src={myRecipe[0].img} alt="imagen" />
                </div>
                <div className={style.contenedorInfo}>
                    <h1>Recipe: {myRecipe[0].title}</h1>
                    
                    <p className={style.summaryDetail} >
                        {myRecipe[0].summary.replace(/<[^>]*>/g, "")}
                    </p>
                    {/* <h4 className={style.dishTypes}>Dish Type: {myRecipe[0].dishTypes ? myRecipe[0].dishTypes.map(d => d.name) :'dish type not found'  }</h4> */}
                    <h5 className={style.healthScore}>HealthScore {myRecipe[0].healthScore}</h5>
                    <h4 className={style.stepsTitle}>Steps</h4>  
                    <h5 className={style.type}>{ Array.isArray(myRecipe[0].analyzedInstructions) ? myRecipe[0].analyzedInstructions.map(e => e.steps.map(f => f.step)) : myRecipe[0].analyzedInstructions }</h5>  


                </div>

            </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <button>Back to Home</button>
        </Link>

         </div>
    
    )
}