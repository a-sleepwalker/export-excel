import {lazy} from 'react';
import requireContext from 'require-context.macro';
import {loadModules} from '@/utils';

export default loadModules<RouteConfig[]>(requireContext('./', false, /(?=(?<!index)\.ts$)\.ts$/), [])
  .concat([
    // base routes
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '*',
      component: lazy(() => import('../../components/Err404')),
    },
  ]);
