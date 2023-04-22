import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signoutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icons/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.somponent";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    // console.log(currentUser);

    return(
     <Fragment> 
        <div className="navigation">
            <Link className="logo-container" to='/'>
               <Logo className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/auth'>
                    {
                        currentUser?(
                            <span className="nav-link" onClick={signoutUser}>SIGN OUT</span>
                        ):(
                            <Link className="nav-link" to='/auth'>SIGN IN</Link>
                        )
                    }
                </Link>
                <CardIcon/>
            </div>
            <CartDropdown/>
        </div>
        <Outlet/> 
     </Fragment>
    )
 }

 export default Navigation;