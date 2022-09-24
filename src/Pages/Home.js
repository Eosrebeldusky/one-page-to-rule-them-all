import { useEffect, useState } from "react";

import BasicModal from '../Components/BaiscModal';
import "../Css/home.css"
import Menu from '../Components/Menu'

function Home (){ 
   
    const [loading,setLoading] = useState(true)
    const [modalInfo,setModalInfo] = useState('tuvieja')
    const [error,setError] = useState(false)
    const [errordata,setErrordata] = useState(false)

    
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
    fetchData();

},[]);
 

    //hacer un modal con tenes que esperar hiciste muchas consultas.    

        if(error){
            return(
            <div>
            <BasicModal modalTitle={'Modal 1'} modalInfo={errordata}/>
            </div>
            )
        }else{

            return(         
        
        loading ? <div> Loading </div>:

        <div>
            <body>
            <header >
            <h1>One Page to Rule them All</h1>
            </header>
            <Menu/>            
            <BasicModal modalTitle={'Modal 1'} modalInfo={modalInfo}/>
            </body>            
        </div>
        
        )
    }
}

export default Home;