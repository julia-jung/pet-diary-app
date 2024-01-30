import { useLocation } from 'react-router-dom';

export default function ErrorView() {
  const { state } = useLocation();
  return (
    <>
      <div>ErrorView</div>
      <div>{state.status}</div>
      <div>{state.message || state.statustext}</div>
    </>
  );
}
