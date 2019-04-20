import { SING_IN, SIGN_OUT } from "./types";

export const signIn = () => {
    return {
        type: SING_IN
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}