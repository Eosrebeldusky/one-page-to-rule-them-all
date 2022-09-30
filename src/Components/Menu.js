import {Link} from 'react-router-dom';
import "../Css/menu.css"

function Menu(){

    return(
        
    <div className='wrapper'>
            <Link to="/">Home</Link>
            <div className="column">            
                <Link to="/fellowship">
                    <img src={process.env.PUBLIC_URL+"/fellowshipMenu.png"} alt='fellowship'></img>
                </Link>
            </div>     
            <div className="column">
                <Link to="/towers">
                    <img src={process.env.PUBLIC_URL+"/towersMenu.png"} alt='towers'></img>
                </Link>
            </div>
            <div className= "column">
                <Link to="/return">
                    <img src={process.env.PUBLIC_URL+"/kingMenu.png"} alt='return'></img>
                </Link>
            </div>
        </div>
    )
}

export default Menu;