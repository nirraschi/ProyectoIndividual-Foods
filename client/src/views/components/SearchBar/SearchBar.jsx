import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getRecipesByName(name))
    }


    return(
        <div className={style.container}>
            <div className={style.search}>
            <input className={style.searchTerm} type="text"
            placeholder="Enter the name of the recipe..."
            onChange={(e)=> handleInputChange(e)}
            />        
            <button className={style.searchButton} type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
            </div>
        </div>
    )
}