import React from 'react';
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <div>UI Library</div>
      <Button onClick={()=> console.log("Button clicked")}>UI test</Button>
    </div>
  );
}

export default App;
