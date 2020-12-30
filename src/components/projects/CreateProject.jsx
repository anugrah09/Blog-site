import react, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/')
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return<Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="black-text darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea  id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn red">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchtoProps = (dispatch)=>{
    return{
        createProject: (project)=> dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(CreateProject);