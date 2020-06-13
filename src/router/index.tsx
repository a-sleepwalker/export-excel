import React, {PropsWithChildren, ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderRoutes from '@/utils/render-routes';
import routes from './routes';

function AppRoutes(props: PropsWithChildren<{ routes: RouteConfig[] }>) {
  return renderRoutes(props.routes);
}

export default function AppRouter(): ReactElement {
  return (
    <BrowserRouter>
      <AppRoutes routes={routes}/>
    </BrowserRouter>
  );
}
