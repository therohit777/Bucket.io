import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    console.log(currentUser);
    return(
     <Fragment> 
        <div className="navigation">
            <Link className="logo-container" to='/'>
               <Logo className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>SHOP</Link>
            </div>
            <div className="nav-links-container">
                <Link className='nav-link' to='/auth'>Sign-in</Link>
            </div>
        </div>
        <Outlet/> 
     </Fragment>
    )
 }

 export default Navigation;