import React from 'react';
import Card from './components/Card';
import obj from "./comment"

function App() {
  return (
    <div className="m-5" > 
      <Card obj={obj} />
    </div>
  );
}

export default App;
