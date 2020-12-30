import react from 'react';
import {Link} from 'react-router-dom';
import SignedInlinks from './SignedInlinks';
import SignUplinks from './SignUplinks';
import {connect} from 'react-redux'

const navbar = (props)=>{
    const {auth} = props;
    // console.log(props)
    const {profile} = props;
    const links = auth.uid ? <SignedInlinks  profile={profile}/> : <SignUplinks />
  return(
      <nav className="nav-wrapper grey darken-3">
          <div className="container">
              <Link to ='/' className='brand-logo'>BlogSite</Link>
              {links}
          </div>
      </nav>
  )
}
const mapStateToProps = (state)=>{
    // console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(navbar);