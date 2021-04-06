import { createStore } from 'redux'

const initialState = { count: 0, test: 9, contact: []}

const reducer = (state = initialState, action) => {
  console.log(11111);
  switch (action.type) {
    case 'INC_COUNT':
      return { ...state, count: state.count + 1}

      case 'DEC_COUNT':
        return { ...state, count: state.count - 1} 

      case 'INIT_COUNT':
        return { ...state, contact: action.payload} 
        
      case 'ADD_CONTACT':
        return { ...state, contact: [...state.contact, action.payload]} 

        case 'DEL_CONTACT':
          return { ...state, contact: [...state.contact].filter(el => el.id !== action.payload.id)} 
  
    default:
      return state // обязательное!!!
  }
}

const store = createStore(reducer)

// console.log(store.getState());

// store.dispatch({ type:'INC_COUNT' })
// store.dispatch({ type:'INIT_COUNT', payload: [{ name: 'Max', num: '123123123', id: '0'},{ name: 'ffff', num: '7777777', id: '3'},{ name: 'dfg', num: '99999999', id: '4'}] })
// store.dispatch({ type:'ADD_CONTACT', payload: { name: 'Max2', num: '10000000', id: '1'} })
// store.dispatch({ type:'ADD_CONTACT', payload: { name: 'Max3', num: '99999990', id: '2'} })
// // store.dispatch({ type:'DEL_CONTACT', payload: { id: '2'} })

// console.log('=========');
// console.log(store.getState());

