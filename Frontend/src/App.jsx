import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard";

const App=()=>{
  const [users,setUsers] =useState([]);

  useEffect(()=>{
    axios.get("")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err));

  },[])

  return(
    <div>
      {users.map(user=><UserCard key={user._id} user={user}/>)}
    </div>
  )
}
export default App;