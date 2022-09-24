import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import BasicModal from '../Components/BaiscModal';
import "../Css/home.css"

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
            <div class='wrapper'>
            <div class="Movie">            
            <Link to="/fellowship">
                <img src='https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/4/7/7/1252477_fellowship.jpg'></img></Link>
                </div>     
            <div class="Movie">
            <Link to="/towers"> <img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e9f51333b9aa11e5bcb538263a60a0db5f11a81e603d489a85dd00fc87be160a._RI_V_TTW_.jpg'></img></Link>
            </div>
            <div class= "Movie">
            <Link to="/return"><img src='https://sm.ign.com/ign_ap/screenshot/default/the-lord-of-the-rings-the-return-of-the-king-59b7d7a3775bf_dhkf.jpg'></img></Link>
            </div>
            <BasicModal modalTitle={'Modal 1'} modalInfo={modalInfo}/>
            </div>
            </body>
            
        </div>
        
        )
    }
}

export default Home;