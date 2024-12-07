import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '../../assets/logo/store.svg'
import './navigation.styles.scss'

export function Navigation() {
  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/" >
          <Logo className="logo" width="40px" height= "40px"/>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link" >SHOP</Link>
          <Link to="/auth" className="nav-link" >SIGN IN</Link>
        </div>
      </div>
      <Outlet />    {/*Parent route must use "Outlet" */}
    </div>
  )
}