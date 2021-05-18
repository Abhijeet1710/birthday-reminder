import React, { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import data from './data';

function App() {

  const [people, setPeople] = useState(data)

  return (
  <div className="main-container">
    <h2> {people.length} birthday's today </h2>
    <ContactList dataset = {people} />
    <button className="btn-clear" onClick={ () => setPeople([]) }> Clear All </button>
  </div>
  );

  function clearList() {
    console.log("Clearing")
    setPeople([]);
  }


}

export default App;
