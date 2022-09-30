import {Link} from "react-router-dom"
import { useState,useEffect } from "react"
import Menu from "../Components/Menu"
function Home (){ 
   
    const [loading,setLoading] = useState(true)
    const [modalInfo,setModalInfo] = useState('tuvieja')
    const [error,setError] = useState(false)
    const [errordata,setErrordata] = useState(false)

    const [axiosData,setAxiosData] = useState();

    


//    No axios effect (en reealidad hay que borrar)
    useEffect(()=>{
    const fetchData = async ()=>{ 
        try{                     
            const response = await fetch('https://the-one-api.dev/v2/book');
            const json = await response.json();          
            //console.log(json.docs)            
            setLoading(false)
        }catch(e){
            console.error("error", e)
            setError(true)
            setErrordata(e)            
        }
    };
    fetchData(); //Probando

},[]);

    //hacer un modal con tenes que esperar hiciste muchas consultas.    

       
            return(
            <div>
                <Menu/>
                
            </div>
            )
}

export default Home;