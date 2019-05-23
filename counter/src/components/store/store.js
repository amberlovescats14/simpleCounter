import { createStore } from 'redux'

const initialState = {
  count: 0,
  // list
  inputText: 'Type Here',
  items: []
}
const reducer = (state=initialState, action) => {
  console.log(state)
    switch(action.type){
      case 'INCREASE_COUNT': 
      return Object.assign({}, state, {count: state.count +1});
      case 'DECREASE_COUNT':
      return Object.assign({}, state, {count: state.count -1});
      //listers
      case 'INPUT_TEXT': 
      return Object.assign({}, state, {inputText: action.text});
      case 'ADD':
      return Object.assign({}, state, {items: state.items.concat(state.inputText),
      inputText: ''
      })
      default: return state;
    }
}

const store = createStore(reducer)

export default store