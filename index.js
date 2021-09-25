const redux = require('redux');
const createStore = redux.createStore;
// const cr = redux.combineReducers;
// console.log(cr);

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
const cakestore = createStore(cakereducer);
const icecreamstore = createStore(icecreamreducer)

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
console.log('initial state', cakestore.getState())
const unsuscribe=cakestore.subscribe(() => console.log('updated state' , cakestore.getState()))
cakestore.dispatch(buycake())
cakestore.dispatch(buycake())
cakestore.dispatch(buycake())

const icecreamunsuscribe=icecreamstore.subscribe(() => console.log('updated state' , icecreamstore.getState()))
icecreamstore.dispatch(buyicecream())
icecreamstore.dispatch(buyicecream())
icecreamstore.dispatch(buyicecream())
icecreamunsuscribe()