import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';

import RootRoute from './RootRoute';
import ErrorRoute from './ErrorRoute';
import { routes } from './routes';

export default function RouterProvider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootRoute />,
      errorElement: <ErrorRoute />,
      children: routes,
    },
  ]);

  return <ReactRouterProvider router={router} />;
}
