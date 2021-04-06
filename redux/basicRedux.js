import { createStore } from 'redux'

const reduser = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1

    case 'DEC':
      return state - 1  
  
    default:
      return state
  }
}

const store = createStore(reduser)
// сущность
console.log(store);
console.log(store.getState());
// изменение состояния
store.dispatch({ type:'INC' })
store.dispatch({ type:'INC' })
store.dispatch({ type:'INC' })
console.log(store.getState());

// console.log(store.subscribe());
// console.log(store.replaceReducer());
