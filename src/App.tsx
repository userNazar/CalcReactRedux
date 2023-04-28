import React from 'react';
import './App.css';
import Display from './components/Display';
import Panel from './components/Panel';
import { useSelector } from 'react-redux';
import { RootState } from '.';



function App() {

  const bg = useSelector((state: RootState) => state.styles.bdDg)
  
  return (
    <div className={`App ${bg}`}>
      <Display />
      <Panel />
    </div>
  );
}

export default App;
