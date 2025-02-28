
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root for the application without any Lovable-specific code
createRoot(document.getElementById("root")!).render(<App />);
