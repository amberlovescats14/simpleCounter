import React from 'react';
import './App.css';
import Counter from './components/Counter'
import store from './components/store/store'
import Lister from './components/Lister'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <Counter store={store}/>
      <hr/>
      <Lister  store={store} />
    </div>
  );
}

export default App;
