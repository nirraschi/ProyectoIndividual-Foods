import {GET_RECIPES} from "./actions";
const initialState = {
    recipes: [],
    allRecipes:[],
    typeDiets:[],
    detail:[]
}
//ACA
const rootReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        
        case "POST_TYPEDIETS":
            return{
                ...state,
            }

        case "GET_TYPE_DIETS":
            return{
                ...state,
                typeDiets: action.payload
            }

        case 'FILTER_BY_TYPEDIET':
            const allRecipes = state.allRecipes
            const typeDietsFiltered = action.payload === 'All' ? allRecipes : allRecipes.filter(ele => ele.typeDiets.find(e =>  e.name  === action.payload ) ) //porque tiene que entrar a
            return{
                ...state,
                recipes : typeDietsFiltered
            } 
        case 'GET_NAME_RECIPES':
            return{
                ...state,
                recipes: action.payload
            }

        case 'GET_DETAILS':
            return{
                ...state,
                detail: action.payload
            }
            
            


        case 'ORDER_BY_NAME':
             const orderedName = action.payload === 'asc' ?
             state.recipes.sort(function(a, b){
                if(a.title > b.title){
                    return 1;
                }
                if(b.title > a.title){
                    return -1;
                }
                return 0;
            }):
                state.recipes.sort(function(a, b){
                    if(a.title > b.title){
                        return -1;
                    }
                    if(b.title > a.title){
                        return 1;
                    }
                    return 0;
                })
            return{...state,
            recipes: orderedName};

        case 'ORDER_BY_HEALTHSCORE':
            const orderedHealthScore = action.payload === 'asc' ?
            state.recipes.sort(function(a, b){
            if(a.healthScore > b.healthScore){
                return 1;
            }
            if(b.healthScore > a.healthScore){
                return -1;
            }
            return 0;
            }):
            state.recipes.sort(function(a, b){
                if(a.healthScore > b.healthScore){
                    return -1;
                }
                if(b.healthScore > a.healthScore){
                    return 1;
                }
                return 0;
            })
            return{...state,
                recipes: orderedHealthScore};

            default: 
            return{...state};
    } // } switch
} // } const rootReducer





export default rootReducer;