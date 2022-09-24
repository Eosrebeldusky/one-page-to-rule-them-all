import {useEffect, useState } from "react";
import MovieInfo from '../Components/MovieInfo'
import Menu from "../Components/Menu.js";

function Fellowship(){
    const headers ={
        'Accept': 'Application/json',
        'Authorization': 'Bearer ahFAu9x_zientX7cPIiC'
    }
    const [titulo, setTitulo] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState();
    const [runTime, setRuntime] = useState();
    const [award, setAward] = useState();
    const [rotten, setRotten] = useState();
   
   
useEffect(()=>{
    
        const fellowshipFetch = async()=>{ 
            try{ 
                const response = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c',{headers:headers});                 
                const movie = await response.json();
                setTitulo(movie.docs[0].name)
                console.log(movie)
                setRuntime(movie.docs[0].runtimeInMinutes)
                setAward(movie.docs[0].academyAwardWins)
                setRotten(movie.docs[0].rottenTomatoesScore)
                setLoading(false)
            }catch(e){
                console.error(e)
                setError(e)
            }
        };
        fellowshipFetch();
        
    },[])

    
    return(
        loading ? <div><h1>Cargando</h1></div> :
        <div>
            <Menu/>            
           <MovieInfo title = {titulo} runTime={runTime} awardWins={award} rottenTomatoeScore={rotten}/>
           
        </div>
    )

}

export default Fellowship;