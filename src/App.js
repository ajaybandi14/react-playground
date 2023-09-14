import React, { useState, useRef, useEffect } from 'react';
import DebouncedSearch from './debouncedSearch.js';
import './style.css';

export default function App() {
  return (
    <div>
      <DebouncedSearch />
    </div>
  );
}
