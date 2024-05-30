import { RouteError } from '@/lib/types';
import { useRouteError } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
