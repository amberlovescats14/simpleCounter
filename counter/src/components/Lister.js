import React from 'react'
import { connect } from 'react-redux'

function Lister(props) {
  return (
    <div>
      <h1>Lets create a List!</h1>
      <form onSubmit={props.onSubmit}>
      <input value={props.inputText} onChange={props.onInput}/>
      <ul style={{listStyle:'none'}}>
        {props.items.map((item, i)=> {
          return <li key={i}>{item}</li>
        })}
      </ul>
      </form>
    </div>
  )
}
const mapStateToProps = state => ({
  inputText: state.inputText,
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  onInput: (e) => {
    const action = {type: 'INPUT_TEXT', text: e.target.value};
    dispatch(action)
  },
  onSubmit: (e) => {
    e.preventDefault()
    const action = {type: 'ADD'};
    dispatch(action)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Lister)
