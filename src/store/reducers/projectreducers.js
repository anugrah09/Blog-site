const initstate ={}
const projectreducer = (state=initstate, action)=>{
    switch(action.type){
        case 'Create_Project':
            console.log('created project', action.project);
            return state;
        case 'Create_Project_error':
            console.log('Create_Project error', action.error);
            return state;
        default:
            return state;
    }
}

export default projectreducer;