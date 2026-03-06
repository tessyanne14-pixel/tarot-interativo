import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent "Cannot set property fetch of #<Window> which has only a getter"
// This happens when third-party scripts (like YouTube IFrame API) try to polyfill fetch
// in an environment where fetch is defined as a getter-only property.
try {
  const originalFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get: () => originalFetch,
    set: () => {
      // Silently ignore attempts to overwrite fetch
    },
    configurable: true
  });
} catch (e) {
  console.warn('Could not redefine window.fetch', e);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
