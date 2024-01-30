import { useRouteError } from 'react-router-dom';
import { Error } from '@/types/common';

export default function ErrorRoute() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>{error.status}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
