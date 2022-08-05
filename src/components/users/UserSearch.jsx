import { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";
import {searchUsers} from '../../context/github/GithubActions';
function UserSearch(){

const {users, clearUsers, dispatch} = useContext(GithubContext);
const {setAlert} = useContext(AlertContext);


const [text, setText]=useState('');


const handleSubmit = async(e)=>{
e.preventDefault();

if(text===''){
    setAlert("Please enter some text", 'error')
    // alert("Please enter some value to search");
}
else{
    // todo: handle searc hing
    dispatch({
      type: 'SET_LOADING'
    })

    const users = await searchUsers(text);
    dispatch({
      type: 'GET_USERS',
      payload: users
    })
    setText('');
}

}


// function handleChange(e){
//     setText(e.target.value)
// }

const handleChange = (e)=>{

    setText(e.target.value);
    console.log(e.target.value);

}


return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
          <Alert/>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search'
              value={text}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
            >Search
            </button>
          </div>
        </div>
      </form>
    </div>
    {users.length > 0 && (
      <div>
        <button onClick={()=>{ dispatch({
          type: 'CLEAR_USERS'
        })}} className='btn btn-ghost btn-lg'>Clear</button>
      </div>
    )}
  </div>
)

}


export default UserSearch;