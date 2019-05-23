import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <h1>This is a Counter</h1>
      <h1>{props.count}</h1>
      <button  onClick={props.onIncrement}>Incrament</button>
      <button onClick={props.onDecrement}>Decrament</button>
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