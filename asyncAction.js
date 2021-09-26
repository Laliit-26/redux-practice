const redux = require('redux');
const reduxStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');


const initialState = {
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQ = 'FETCH_USERS_REQ'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersReq = () => {
    return {
      type: FETCH_USERS_REQ
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        paload:error
    }
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_USERS_REQ' :
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_USERS_SUCCESS' :
            
            return {
                   
                ...state,
                loading: false,
                users: action.payload,
                error:''
            }
        case 'FETCH_USERS_FAILURE' :
            return {
                loading: false,
                users: [],
                error:action.payload
            }
    }
}

const fetchusers = () => {
    
    return function (dispatch) {
        dispatch(fetchUsersReq());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const users=res.data.map(user=>user.id)
            dispatch(fetchUserSuccess(users))
            }).catch((error) => {
            dispatch(fetchUserFailure(error))
        })
    }
}


const store = reduxStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState())});
store.dispatch(fetchusers());
