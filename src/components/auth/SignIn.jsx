import react, { Component } from 'react';
import { connect } from "react-redux";
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        // console.log(this.props);
        this.props.signIn(this.state);
    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid) return<Redirect to='/' />
    //    console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn red">Login</button>
                    </div>
                <div className="red-text center">
                    { authError ? <p>{authError}</p> : null}
                </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }   
}
const mapDispatchtoProps = (dispatch)=>{
    return{
        signIn: (creds)=> dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(SignIn);
// export default SignIn;