import { SING_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId : null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SING_IN:
            return { ...state, isSignedIn: true, userId: action.payload }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}