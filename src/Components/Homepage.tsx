import React from 'react'
import {useFetch} from '../Hooks/FetchHook'
import axios from 'axios'

const Homepage = () => {
  const queryName="get-superheroes";
 


  const {isLoading,isError,data}=useFetch(queryName)
  console.log(data);

  if(isLoading){
    return <h2>Loading....</h2>
  }

  if(isError){
    return <h2>Error fetching data</h2>
  }
  return (
    <div>
      Homepage
      {data?.data.map((hero)=><h2 key={hero.id}>{hero.name}</h2>)}
    </div>
  )
}

export default Homepage