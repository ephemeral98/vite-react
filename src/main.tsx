import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initRem from '@/utils/initRem';

initRem();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
