import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory} from "react-router-dom";
import {postRecipes, getTypeDiets} from '../../redux/actions.js'
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";


function validate(input){
    let errors={};
    if(!input.name){
        errors.name = "Write title!";
    }else if(!input.summary){
        errors.summary = "Write summary!"
    }else if(!input.summary){
        errors.analyzedInstructions = "Write instructions"
    }
    return errors;
}




export default function Form(){
    const dispatch = useDispatch()
    const history = useHistory()
    const typeDiets = useSelector((state) => state.typeDiets)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        title:"",
        resume:"",
        healthScore:"",
        analyzedInstructions:"",
        typeDiets: []
    })

    useEffect(() =>{
        dispatch(getTypeDiets());
    }, [dispatch]);
    

    function handlerChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    }

    // function handlerSelect(e){
    //     setInput({
    //         ...input,
    //         typeDiets: [...input.typeDiets, e.target.value]
    //     })
    // }
    function handlerSelect(e){
    setInput({ 
        ...input, 
        typeDiets: [...input.typeDiets, e.target.value] });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postRecipes(input))
        alert('Congratulations you created a new recipe!')
        setInput({
            title :'',
            summary:'',
            healthScore:'',
            analyzedInstructions:'',
            typeDiets:[]
        })
        history.push('/home')

    }
    // const [errors, setErrors] = useState({        
    //     title:"",
    //     resume:"",
    //     healthScore:"",
    //     analyzedInstructions:"", 
    // })
    // const changeHandler = (event) =>{
    //     const property = event.target.name;
    //     const value =  event.target.value;


    //     setForm({...input,[property]:value});
    //     validate({...input,[property]:value})
    // }

    //RETURN  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

    return(
        <div className={style.contenedor}> 
            <div>
                <Link to= '/home'><button>Back</button></Link>
                <h1>Create your recipe</h1>
            </div> 

            <form onSubmit={(e) =>{handleSubmit(e)}}>

                <div>
                    <label>Title </label>
                    <input type="text" value={input.title} onChange={handlerChange} name="title"/>
                </div>
                <div>
                    <label>Resume </label>
                    <input type="text" value={input.summary} onChange={handlerChange} name="summary"/>
                </div>
                <div>
                    <label>HealthScore </label>
                    <input type="text" value={input.healthScore} onChange={handlerChange} name="healthScore"/>
                </div>
                <div>
                    <label>Steps </label>
                    <input type="text" value={input.analyzedInstructions} onChange={handlerChange} name="analyzedInstructions"/>
                </div>
                <div>
                    <select onChange={(e)=> handlerSelect(e)}>
                        <option> </option>
                        {typeDiets?.map((ele) => {
                            return <option value={ele}> {ele} </option>
                        })}
                    </select>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}