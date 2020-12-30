import react from 'react';
import {NavLink} from 'react-router-dom';
import {connect } from 'react-redux';
import {signOut} from '../../store/actions/authActions'
const SignedInlinks = (props)=>{
// console.log(props)
  return(
      <nav className="nav-wrapper grey">
          <ul className="right">
              <li><NavLink to='/createproject'>New Project</NavLink></li>
              <li><a onClick={props.signOut}>LogOut</a></li>
              <li><NavLink to='/' className="btn btn-floating red">{props.profile.initials}</NavLink></li>
          </ul>
      </nav>
  )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInlinks);