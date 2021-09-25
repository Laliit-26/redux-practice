const redux = require('redux');
const createStore = redux.createStore;



function buycake() {
    return {
    type:'BUY_CAKE'
}
}

const initialstate = {
    numofcakes: 10
}
const reducer = (state = initialstate, action) => {
    console.log(action.type === 'BUY_CAKE')
    switch (action.type)
    { 
        case 'BUY_CAKE':
            return {
                ...state,
                numofcakes: state.numofcakes - 1 
            
            }
        default:return state
    }
}

const store = createStore(reducer);
console.log(store);
console.log('initial state' , store.getState());
const unsuscribe=store.subscribe(() => console.log('updated state' , store.getState()))
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
unsuscribe();