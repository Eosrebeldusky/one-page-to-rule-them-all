import { useSlotProps } from "@mui/base";
import { useEffect, useState } from "react";
import MovieInfo from "../Components/MovieInfo.js";
//import key from '../Components/Config'
function ReturnKing(){

    const headers = {
        'Accept': 'Application/json',
        'Authorization': 'Bearer ahFAu9x_zientX7cPIiC'
    }

    const [title,setTitle] = useState()
    const [runTime,setRuntime] = useState()
    const [awardWins,setAwardWins] = useState()
    const [rotten,setRotten] = useState()
    const [loading,setLoading] = useState(true)
    
    
    useEffect(  ()=>{
        const getRetKingMovie = async () =>{
            try {            
                const response = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5d',{headers:headers});
                if(!response.ok){
                    throw new Error(`HTTP error! status :${response.status}`);
                }
                const jmovies = await response.json()                 
                setTitle(jmovies.docs[0].name)
                setRuntime(jmovies.docs[0].runtimeInMinutes)
                setAwardWins(jmovies.docs[0].academyAwardWins)
                setRotten(jmovies.docs[0].rottenTomatoesScore)
                setLoading(false)
                console.log(jmovies.docs[0].name)                
            }   catch (error) {
                    console.error('Manquito, tu error es este:',error)        
            }
        }
        getRetKingMovie()
        
        },[]); // el use effect con el array vacio al final hace que todo el choclazo no se llame mas de una vez

            return(loading ? <div> Loading </div> :           
            <div>          
                <MovieInfo title={title} runTime={runTime} awardWins={awardWins} rottenTomatoeScore={rotten}/>
            </div>
            )

}


export default ReturnKing;