import react from 'react';
import {NavLink} from 'react-router-dom';
const SignedInlinks = ()=>{
  return(
      <nav className="nav-wrapper grey">
          <ul className="right">
              <li><NavLink to='/signin'>LogIn</NavLink></li>
              <li><NavLink to='/signup'>SignUp</NavLink></li>
          </ul>
      </nav>
  )
}
export default SignedInlinks;