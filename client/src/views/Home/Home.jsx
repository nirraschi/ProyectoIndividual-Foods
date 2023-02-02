import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
//import CardsContainer from "../components/CardsContainer/CardsContainer";
import { getRecipes, filterRecipesByDiets, orderByName, orderByHealthScore} from "../../redux/actions";
import style from "./Home.module.css";
import { useState } from "react";
import Paginado from "../components/paginado";
import Card from "../components/Card/Card";
import image from "../Images/logo.png";
import image1 from "../Images/section.jpeg";
import NavBar from "../components/NavBar/NavBar.jsx";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Home = () =>{
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes)
    const [currentPage, setCurrentPage] = useState(1) //pagina actual que arranca en 1
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipes = currentPage * recipesPerPage // 9 
    const indesOfFirstRecipe = indexOfLastRecipes - recipesPerPage //0
    const currentRecipes = allRecipes.slice(indesOfFirstRecipe,indexOfLastRecipes)


    const [Orden, setOrden]= useState('')

    const paginado = (pageNumber) =>{ //le paso el numero de la pagina
        setCurrentPage(pageNumber) //setea el numero de la pagina
    }

    useEffect(()=>{
        dispatch(getRecipes());
    }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes())
    }

    function handleFilterStatus(e){
        if(e.target.value !== "All"){
        dispatch(filterRecipesByDiets(e.target.value))
        }else{
            dispatch(getRecipes())
        }
    }

    function handleSort(e){
        if(e.target.value !== "All"){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
        }else{dispatch(getRecipes())}
    }
    function handleSortHS(e){
        if(e.target.value !== "All"){
        e.preventDefault();
        dispatch(orderByHealthScore(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }else{dispatch(getRecipes())}
    }
    

    return(

        <>
        
        <div className={style.falseBody}>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap" rel="stylesheet"/>
            <div className={style.container}>
            <div><NavBar/></div>
            <div className={style.containerCosas}>
                    
                    <div className={style.containerCosasIn}>
                    
                        <div>
                            <img className={style.logo} src={image} alt="logo" />
                        </div>
                        <h1 className={style.title}>Green Kitchen</h1>
                        <p className={style.parrafo}>Navigate among hundreds of cooking recipes according to your type of diet</p>                
                    </div>
                    <div>
                        <img className={style.section} src={image1} alt="section" />
                    </div>
            </div>
            
            {/* <img className={style.img2} src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg" alt="Imagen decorativa home" /> */}
            </div>
            
            <div>       
                        <SearchBar/>
                        <div className={style.containerOrder}>
                            <div className={style.containerSelect}>
                                <p>Alphabetical Order</p>
                                <select onChange={e => handleSort(e)}>
                                    <option value="All">No order</option>
                                    <option value="asc">Ascendente</option>
                                    <option value="desc">Descendente</option>
                                </select>
                            </div>
                            <div className={style.containerSelect}>
                                <p>Order by Health Score </p>
                                <select onChange={e => handleSortHS(e)}>
                                    <option value="All">No order</option>
                                    <option value="asc">Lowest to highest</option>
                                    <option value="desc">Highest to lowest</option>
                                </select> 
                            </div> 
                        </div>
                <p>Type Diets</p>
                <select onChange={e => handleFilterStatus(e)}>
                    <option value="All">All</option>
                    <option value="gluten free">Gluten free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="lacto-vegetarian">Lacto-vegetarian</option>
                    <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30'">Whole 30'</option>
                </select>    
     
            </div>
            <button onClick={e => {handleClick(e)}}>Reset Filters</button>
        </div>

        <div>
        <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado = {paginado}
        />

    <div className={style.cardsContainer}>
        {currentRecipes?.map((receta, i) => {
            return(        
                    <Link to={`./recipes/${receta.id}`} key={i}>     
                    
                    <Card
                    title={receta.title}
                    img={receta.img}
                    typeDiets={receta.typeDiets}
                    healthScore={receta.healthScore}
                    />
                    </Link>                   
                );   
        })}
    </div>
        </div>
        </>
    )

}
//<CardsContainer/>
export default Home;