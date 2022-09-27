import {Link} from 'react-router-dom';
import "../Css/menu.css"

function Menu(){

    return(
        
    <div class='wrapper'>
            <Link to="/">Home</Link>
            <div class="column">            
                <Link to="/fellowship">
                    <img src={process.env.PUBLIC_URL+"/fellowshipMenu.png"} alt='fellowship'></img>
                </Link>
            </div>     
            <div class="column">
                <Link to="/towers">
                    <img src={process.env.PUBLIC_URL+"/towersMenu.png"} alt='towers'></img>
                </Link>
            </div>
            <div class= "column">
                <Link to="/return">
                    <img src={process.env.PUBLIC_URL+"/kingMenu.png"} alt='return'></img>
                </Link>
            </div>
        </div>
    )
}

export default Menu;