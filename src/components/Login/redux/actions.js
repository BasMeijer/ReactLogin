export function setAuth(token, username, email, userId){
    return {
        type:'SET_AUTH',
        token,
        username,
        email,
        userId,
    }
}

export function clearAuth(token, username, email, userId){
    return {
        type:'CLEAR_AUTH',
        token,
        username,
        email,
        userId
    }
}