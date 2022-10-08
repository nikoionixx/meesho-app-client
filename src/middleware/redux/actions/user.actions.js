import { UserActionTypes } from "../constants/user/user.types"

export const setUser = (user) => {
    return {
        type : UserActionTypes.SET_USER,
        payload : user
    }
}