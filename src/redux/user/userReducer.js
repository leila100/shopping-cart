export {SET_CURRENT_USER} from "./userActions"

const initialState = {
    currentUser: null
  };

const userReducer = (state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;