import { SING_IN, SIGN_OUT } from "./types";

export const signIn = userId => {
    return {
        type: SING_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}