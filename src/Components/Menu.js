import {Link} from 'react-router-dom';

function Menu(){

    return(
        
    <div class='wrapper'>
            <Link to="/">Home</Link>
            <div class="Movie">            
                <Link to="/fellowship">
                    <img src='https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/4/7/7/1252477_fellowship.jpg'></img>
                </Link>
            </div>     
            <div class="Movie">
                <Link to="/towers">
                    <img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e9f51333b9aa11e5bcb538263a60a0db5f11a81e603d489a85dd00fc87be160a._RI_V_TTW_.jpg'></img>
                </Link>
            </div>
            <div class= "Movie">
                <Link to="/return">
                    <img src='https://sm.ign.com/ign_ap/screenshot/default/the-lord-of-the-rings-the-return-of-the-king-59b7d7a3775bf_dhkf.jpg'></img>
                </Link>
            </div>
        </div>
    )
}

export default Menu;