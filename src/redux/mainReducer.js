import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax'

const retrieveViaAjax = (token, url) => {
    return (
        ajax({
            url: url,
            crossDomain: true,
            method: 'GET',
            withCredentials: false,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            responseType: 'json'

        })
    )
};

const updateViaAjax = (token, url, data) => {
    console.log("URL :"+url)
    return (
        ajax({
            url: url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },

            body: data
        })
    )
}

// #1
import { cusotmerForm } from  './reducers/customerForm'

export const mainReducer = combineReducers({
    cusotmerForm: cusotmerForm,
})

export const epics = (...args) => combineEpics()(...args, { ajax, retrieveViaAjax, updateViaAjax })
