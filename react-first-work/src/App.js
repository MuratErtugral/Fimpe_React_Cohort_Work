import React, { useEffect } from 'react';
import getData from './utils/getData';


function App() {
  useEffect(() => {
    const userId = 1; // Değiştirebilirsiniz
    getData(userId)
      .then((result) => {
        console.log('Result:', result);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>This is my first react app</h2>
      <h5>Open the console</h5>
    </div>
  );
}

export default App;
