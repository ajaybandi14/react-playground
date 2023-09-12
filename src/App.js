import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const [inputString, setInputString] = useState('');
  const debouncedInput = useRef();

  useEffect(() => {
    const debouncedSearch = setTimeout(async () => {
      const fetchResult = await fetch(`https://dummyjson.com/todos?limit=10&skip=80?term=${inputString}`);
      const todos = await fetchResult.json();
      console.log('Todos', todos);
    }, 500);

    return (() => {
      clearTimeout(debouncedSearch);
    });
  }, [inputString]);

  console.log('Input', inputString);

  return (
    <div>
      <input ref={debouncedInput} type="search" onChange={(e) => setInputString(e.target.value)}/>
    </div>
  );
}
