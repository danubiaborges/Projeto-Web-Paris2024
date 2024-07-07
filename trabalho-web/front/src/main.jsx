import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
