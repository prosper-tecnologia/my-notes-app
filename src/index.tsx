import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import { App, Auth } from '@/layouts';
import { Create, Login, Notes } from '@/pages';
import store from '@/store';
import { ModalProvider } from './contexts/ModalContext';

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      }
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'notes',
        element: <Notes />,
      },
      {
        path: 'create',
        element: <Create />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
