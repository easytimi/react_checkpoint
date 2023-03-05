import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridComplexExample from './component/form';
import BasicExample from './component/about';

 const  App= () => {
  return (
    <div className="App">
      
      <BasicExample></BasicExample>
      <div className='form'>
       <GridComplexExample></GridComplexExample>
      </div>
    </div>
  );
}

export default App;
