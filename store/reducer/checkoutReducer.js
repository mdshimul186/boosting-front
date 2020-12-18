


let init ={
    service:{},
    
}

const checkoutReducer = (state=init, action)=>{
    switch (action.type) {
        case "SET_SERVICE":
       return{
           ...state,
           service:action.payload,
        }
    
        default:
            return state;
    }
}

export default checkoutReducer