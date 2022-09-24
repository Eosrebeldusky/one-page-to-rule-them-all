

function MovieInfo(props){
    //const [loading,setLoading] = useState(true)
        const {title,runTime, awardWins,rottenTomatoeScore} = props
    
    //console.log(props.data.docs[0]) //si lo dejo aca me va a console.loguear la vida entera
        return(

                <div>   <h1>{title}</h1>
                        <h2>Informacion</h2>
                        <p>Runtime in minutes: {runTime}</p>
                        <p>Award Wins:{awardWins}</p>
                        <p>Rotten Tomatotes Score:{rottenTomatoeScore}</p>
                </div>
        
        )
}

export default MovieInfo;