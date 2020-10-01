const INIT_STATE = {
    roleData:[],
}

export default (state = INIT_STATE, action) =>{
    switch("data") {
        case "data" : 
            return {...state,roleData:action.payload};

        default:
            return state;
    }
}