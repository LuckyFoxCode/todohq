import { Dashboard } from '@/components';
import { Home, NotFound } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'vital-task',
        element: <div>Vital Task</div>,
      },
      {
        path: 'my-task',
        element: <div>My Task</div>,
      },
      {
        path: 'category',
        element: <div>Category Task</div>,
      },
      {
        path: 'settings',
        element: <div>Settings</div>,
      },
      {
        path: 'help',
        element: <div>Help</div>,
      },
    ],
  },
]);
