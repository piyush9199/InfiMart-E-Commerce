import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '../../assets/logo/store.svg'
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"

import { signOutUser } from "../../utils/firebase/firebase.utils" 

export function Navigation() {
  const {currentUser, setCurrentUser} = useContext(UserContext)                         //currentUser data now accessible here
  
  
  async function signOutHandler(){
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/" >
          <Logo className="logo" width="40px" height= "40px"/>
        </Link>
        <div className="nav-links-container">

          <Link to="/shop" className="nav-link" >SHOP</Link>
          {currentUser ? ( <span onClick={signOutHandler} className="nav-link">SIGN OUT</span> ) : (<Link to="/auth" className="nav-link" >SIGN IN</Link>)}

        </div>
      </div>
      <Outlet />    {/*Parent route must use "Outlet" */}
    </div>
  )
}