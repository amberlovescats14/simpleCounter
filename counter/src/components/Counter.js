import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

function Counter(props) {
  return (
    <div>
      <h1>This is a Counter</h1>
      <h1>{props.count}</h1>
      <Button variant="outline-primary" onClick={props.onIncrement}>Incrament</Button>
      <Button onClick={props.onDecrement}>Decrament</Button>
    </div>
  )
}
const mapStateToProps = state =>({

   count: state.count
} )
const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    const action = {type: 'INCREASE_COUNT'};
    dispatch(action)
  },
  onDecrement: () => {
    const action = {type: 'DECREASE_COUNT'};
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)