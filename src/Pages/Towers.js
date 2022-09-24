import {useEffect, useState } from "react";
import MovieInfo from "../Components/MovieInfo";

function Towers(){
    const headers= {
        'Accept': 'Application/json',
        'Authorization': 'Bearer ahFAu9x_zientX7cPIiC'
    }
    const [titulo, setTitulo] = useState() //declaro hook
    const [loading, setLoading] = useState(true) //declaro hook
    const [runTime, setRuntime] =useState()
    const [award, setAward] = useState()
    const [rotten, setRotten] = useState()
     
    useEffect(()=>{
        const towersMovie = async ()=>{ //funcion para agarrar sobre esta funcion trabajo y a esta funcion llamo.            
            try{ //bloque try catch
            const response =  await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b',{headers:headers}) //armo una respuesta para el fetch, es await fetch            
            const movie = await response.json()//al fetch lo transformo en json. 
            console.log(movie)            
            setTitulo(movie.docs[0].name)
            setRuntime(movie.docs[0].runtimeInMinutes)
            setAward(movie.docs[0].academyAwardWins)
            setRotten(movie.docs[0].rottenTomatoesScore)
            setLoading(false)    //tomo el otro hook y le asigno un valor
            }catch(e){ //blocque catch
                console.error(e);     //console el error si hubiera       
            }
            }
                towersMovie() //llamo a la funcion declarada
            },[])

    return( loading ? <div>Loading </div> : //operador ternario para devolve a o b = loading ? a : b

        <div>
            <MovieInfo title = {titulo} runTime={runTime} awardWins={award} rottenTomatoeScore={rotten}/>
        </div>
    )
}
    export default Towers;