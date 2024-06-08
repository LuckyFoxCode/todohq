import { Home } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/vital-task',
    element: <div>Vital Task</div>,
  },
  {
    path: '/my-task',
    element: <div>My Task</div>,
  },
  {
    path: '/task-categories',
    element: <div>Task Categories</div>,
  },
  {
    path: '/settings',
    element: <div>Settings</div>,
  },
  {
    path: '/help',
    element: <div>Help</div>,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);
