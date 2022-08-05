import { createContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;



export const GithubProvider = ({children})=>{

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);
 


    // const getUserRepos = async (login)=>{
    //     console.log("triggered repos");
    //     dispatch({
    //         type: 'SET_LOADING'
    //     })

    //     const params = new URLSearchParams({
    //               sort: 'created',
    //               per_page: 10,
    //             })

    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{

    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     });
    //     const data = await response.json();
    //     console.log("context user repos", data);
    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data
    //     })

    // }




    // const searchUsers = async (text)=>{

    //     console.log("searching user", text);
            
    //     dispatch({
    //             type: 'SET_LOADING', 
    //         })


    //     const params = new URLSearchParams({
    //         q:text
    //     })   


      
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    
    //     })

    //     console.log(`${GITHUB_URL}/search/users?${params}`);

    //     if(response.status===404){
    //         window.location= '/notfound';
    //     }
    
    //     const {items} = await response.json();
      
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items
    //     })
    // }


    // const getUser = async (userID)=>{
            
    //     dispatch({
    //         type: 'SET_LOADING', 
    //     })


    //     console.log(`${GITHUB_URL}/users/${userID}`);
    //     const response = await fetch(`${GITHUB_URL}/users/${userID}`, {
            
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    
    //     })

    //     if(response.status===404){
    //         window.location='/notfound';
    //     }
    //     else{
    //         const data = await response.json();
            
    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data
    //         })

    //     }
    
      
    // }





    // const clearUsers = ()=>{
    //     dispatch({
    //         type: 'CLEAR_USERS',
    //     })

    // }




    return (
            <GithubContext.Provider value={{...state, dispatch}}>
                    {children}
            </GithubContext.Provider>

    )




}


export default GithubContext;


