export const createProject = (project) =>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        // console.log(profile)
        firestore.collection('projects').add({
            ...project,
            authorfirstname: profile.firstName,
            authorlastname: profile.lastName,
            authorid: authorid,
            createdat: new Date() 
        }).then(()=>{
            dispatch({type:'Create_Project', project: project})
        }).catch((err)=>{
            dispatch({type:'Create_Project_error', error: err})
        })
    }
};