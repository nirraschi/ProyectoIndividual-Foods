import axios from "axios";
import { bindActionCreators } from "redux";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
    return async function(dispatch){
        const infoApi = await axios.get("http://localhost:3001/recipes");
        const recipes = infoApi.data;
        dispatch({type:GET_RECIPES, payload: recipes});
    }
    
    
}


//TRAER POR NOMBRE 
export function getRecipesByName(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/recipes?name=" + name)
            return dispatch({
                type: 'GET_NAME_RECIPES',
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}


// export function getTypeDiets(){
//     return async function(dispatch){
//         var info = await axios.get("http://localhost:3001/types",{

//         });
//         return dispatch({ type: "GET_TYPEDIETS", payload: info.data})
//     }
// }
export function postRecipes(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/recipe", payload);
        return response;
    }
}
//TRAER DIETAS

export function getTypeDiets(){
    return async function(dispatch){
        const info = await axios.get("http://localhost:3001/types");
        return dispatch({ type: "GET_TYPE_DIETS",
        payload:info.data});
    }
}


//FILTROS
export function filterRecipesByDiets(payload){
    return{
        type: 'FILTER_BY_TYPEDIET',
        payload
    }
}

//ORDENAMIENTO
export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByHealthScore(payload){
    return{
        type: 'ORDER_BY_HEALTHSCORE',
        payload
    }
}
//DETAIL

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/recipes/" + id);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        }catch(error){
                console.log(error)
            
        }
    }
}

