import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloMessage from './App';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<HelloMessage name="Rails, React and Shakapacker" />);
});