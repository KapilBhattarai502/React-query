
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const fetchSuperHeroes = async () => {
  return await axios.get("http://localhost:3000/superheroes");
};

const addSuperHero=(hero:any)=>{
  return axios.post("http://localhost:3000/superheroes",hero);

}


export const useFetch= (queryName:string) => {
  return (
    useQuery(
      queryName,
      fetchSuperHeroes,
      {
        onSuccess:(data:any)=>{
          console.log('handling success side effects',data);
        },
        onError:(error:any)=>{
          console.log('handling error side effects',error.message)
      
        }
      }
  
    )
  
  )
}



export const useAddSuperHeroData=()=>{

  const queryClient=useQueryClient()
  return useMutation(addSuperHero,{
    onSuccess:()=>{
      queryClient.invalidateQueries('get-superheroes');
    }
  })
}




