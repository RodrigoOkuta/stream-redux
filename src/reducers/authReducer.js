import { SING_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignIn: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SING_IN:
            return { ...state, isSignIn: true }
        case SIGN_OUT:
            return { ...state, isSignIn: false }
        default:
            return state
    }
}