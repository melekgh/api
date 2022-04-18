import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
const Users = () => {
    const [usersList,setUsersList ] = useState([])
    const getData =() =>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res=>(res.json()))
    //     .then(res =>setUsersList(res))
    //     .catch(err =>console.log(err))
    // }
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>{setUsersList(res.data)})
    .catch(err =>console.log(err))
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <h1> My list</h1>
        {
            usersList.map(user => (
                <div  key={user.id}>
                    <h1> {user.name}</h1>
                <h2>{user.email}</h2>
                </div>

            ))
        }
    </div>
  )
}

export default Users