import React from 'react'
import moment from 'moment'
const ProjectSummary = ({project}) => {
    // console.log(project)
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content black-text ">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorfirstname} {project.authorlastname}</p>
                <p className="grey-text">{moment(project.createdat.toDate()).calendar()}</p>
            </div>
        </div>
    )
}


export default ProjectSummary