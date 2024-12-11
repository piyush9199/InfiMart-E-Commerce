import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '../../assets/logo/store.svg'
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"

import { signOutUser } from "../../utils/firebase/firebase.utils" 
import { CartIcon } from "../../components/cart-icon/cart-icon.component"
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component"

export function Navigation() {
  const {currentUser} = useContext(UserContext)                         //currentUser data now accessible here
  

  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/" >
          <Logo className="logo" width="40px" height= "40px"/>
        </Link>
        <div className="nav-links-container">

          <Link to="/shop" className="nav-link" >SHOP</Link>
          {currentUser ? ( <span onClick={signOutUser} className="nav-link">SIGN OUT</span> ) : (<Link to="/auth" className="nav-link" >SIGN IN</Link>)}

        </div>
        <CartIcon />
      </div>
      <CartDropdown />
      <Outlet />    {/*Parent route must use "Outlet" */}
    </div>
  )
}