import usersReducer from "./users_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer;

// {
//     entities: {
//         users: usersReducer,
//         posts: postsReducer
//     },

//     sessions: {

//     }
//     ,
//     sessionErrors: {

//     }
// }