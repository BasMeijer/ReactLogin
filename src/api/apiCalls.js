/**
 * This file contains all the Api Calls being made to the backend.
 * The constants.js file contains all the urls to the different routes needed.
 */

 // IMPORTS ALL THE URLS NEEDED FOR THE API CALLS
import {BASE_URL, LOGIN_URL} from './constants'


// ---------------------
// GENERAL API FUNCTIONS
// ---------------------

/**
 * Handles the rest response and throws an error if something went wrong
 * @param {*} response 
 */
function handleRestResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json())
    } else {
        return Promise.resolve(response.json())
            .then(message => {
                const error = new Error(`${message.message} (code ${message.statusCode})`)
                error.status = response.status
                error.statusCode = message.statusCode

                throw error
            })
    }
}


// ---------------------
// LOGIN API CALLS
// ---------------------

/**
 * Logs the user in with the users credentials and api url to call, then returns a jwt auth token.
 * @param {*} accountDetails 
 */
export function login(accountDetails) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(accountDetails)
    }
    return fetch(`${BASE_URL}${LOGIN_URL}`, options)
        .then(handleRestResponse)
        .then(response => response.token)
}

// TODO ADD LOGOUT FUNCTION
