import React, { useEffect, useState } from "react";
import './App.css';
import API from './ApiService';

function App() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      API.analyzeText(inputText)
        .then((data) => {
          setResults(JSON.stringify(data, null, 2));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setResults('An error occurred.');
          setIsLoading(false);
        });
    }
  }, [isLoading, inputText]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='container'>
        <div>
          <textarea
            className='formElement input'
            type="text"
            value={inputText}
            placeholder='Input your text here:'
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div>
          <pre className='formElement output'>
            { isLoading ? 'Loading...' : results }
          </pre>
        </div>

        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
