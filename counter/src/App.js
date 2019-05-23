import React from 'react';
import './App.css';
import Counter from './components/Counter'
import store from './components/store/store'
import Lister from './components/Lister'

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
      <hr/>
      <Lister store={store} />
    </div>
  );
}

export default App;
