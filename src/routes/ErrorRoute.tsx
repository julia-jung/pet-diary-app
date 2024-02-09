import { useRouteError, useLocation } from 'react-router-dom';
// import { Error } from '@/types/common';

export default function ErrorRoute() {
  const error = useRouteError();
  console.error(error);
  const { state } = useLocation();

  return (
    <div id="error-page">
      <p>Sorry, an unexpected error has occurred.</p>
      {state && (
        <>
          <h4>{state.status}</h4>
          <div>{state.message || state.statustext}</div>
        </>
      )}
    </div>
  );
}
