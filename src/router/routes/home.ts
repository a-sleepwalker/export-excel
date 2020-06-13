import {lazy} from 'react';

export default {
  path: '/home',
  component: lazy(() => import('../../layout/Common')),
  children: [
    {
      path: '/home',
      component: lazy(() => import('../../containers')),
      children: [
        {
          path: '/home',
          component: lazy(() => import('../../pages')),
          exact: true,
        },
      ],
    },
  ],
} as RouteConfig;
