import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Result = Loadable(lazy(() => import('./Result')));

const resultRoutes = [
  { path: '/result', element: <Result /> },
];

export default resultRoutes;
