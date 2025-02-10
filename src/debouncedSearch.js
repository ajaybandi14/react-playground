import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function DebouncedSearch() {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState([]);
  const debouncedInput = useRef();

  const handleChange = (e) => {
    if (!e.target.value) {
      setResult([]);
    }
    setInputString(e.target.value);
  };

  useEffect(() => {
    const debouncedSearch = setTimeout(async () => {
      const fetchResult = await fetch(
        `https://dummyjson.com/todos?limit=10&skip=80&term=${inputString}`
      );
      const res = await fetchResult.json();
      setResult(res.todos);
    }, 500);

    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [inputString]);

  console.log('Input', inputString);

  return (
    <div>
      <input ref={debouncedInput} type="search" onChange={handleChange} />
      <div>
        {result.map((r) => (
          <div>
            <div>{r.id}</div>
            <div>{r.todo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
