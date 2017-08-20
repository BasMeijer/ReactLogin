import { setIn } from '../../../utils/setIn'
import { saveProperty, removeProperty } from '../../../utils/persist'

export function loginReducer(state = {}, action) {

    switch (action.type) {
        case 'SET_AUTH':
            const auth = {
                token: action.token,
                username: action.username,
                email: action.email,
                userId: action.userId,
                timestamp: Date.now(),
            }
            saveProperty('auth', auth)

            return setIn(state, ['auth'], auth)
            
        case 'CLEAR_AUTH':
            removeProperty('auth')

            return setIn(state, ['auth'], {
                token: null,
                username: null,
                email: null,
                userId: null,
                timestamp: null,
            })

        default:
            return state
    }
}