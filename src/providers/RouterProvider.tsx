import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { routes } from '@/routes';

export default function RouterProvider() {
  const router = createBrowserRouter(routes);

  return <ReactRouterProvider router={router} />;
}
