import React from 'react';
import './App.css';
import Counter from './components/Counter'
import store from './components/store/store'

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
    </div>
  );
}

export default App;
