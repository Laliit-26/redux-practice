const redux = require('redux');
const createStore = redux.createStore;
const cr = redux.combineReducers;
// console.log(cr);
const applymiddleware = redux.applyMiddleware;
const reduxlogger = require('redux-logger');
const logger = reduxlogger.createLogger();



function buycake() {
    return {
    type:'BUY_CAKE'
}
}
function buyicecream() {
    return {
        type:'BUY_ICECREAM'
    }
}

// const initialstate = {
//     numofcakes: 10,
//     numoficecream:20
// }


const initialcakestate = {
  numofcakes: 10,
}

const initialicecreamstate = {
  numoficecream: 20,
}

const cakereducer = (state = initialcakestate, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numofcakes: state.numofcakes - 1,
      }
    default:
      return state
  }
}
const icecreamreducer = (state = initialicecreamstate, action) => {
  switch (action.type) {
    case 'BUY_ICECREAM':
      return {
        ...state,
        numoficecream: state.numoficecream - 1,
      }
    default:
      return state
  }
}
// const cakestore = createStore(cakereducer);
// const icecreamstore = createStore(icecreamreducer)

// const reducer = (state = initialstate, action) => {
//     // console.log(action.type === 'BUY_CAKE')
//     switch (action.type)
//     { 
//         case 'BUY_CAKE':
//             return {
//                 ...state,
//                 numofcakes: state.numofcakes - 1 
            
//             }
//         case 'BUY_ICECREAM':
//             return {
//                 ...state,numoficecream:state.numoficecream-1
//             }
//         default:return state
//     }
// }

// const store = createStore(reducer);
// console.log(store);

const rootreducer = cr({
  cake: cakereducer,
  icecream: icecreamreducer,
})

const store = createStore(rootreducer, applymiddleware(logger))
console.log('initial state', store.getState())
const unsuscribe = store.subscribe(() => {})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())

// const unsuscribe=store.subscribe(() => console.log('updated state' , store.getState()))
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsuscribe()