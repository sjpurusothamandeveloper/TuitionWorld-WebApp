import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Admission = Loadable(lazy(() => import('./Admission')));

const administrationRoutes = [
  { path: '/administration/admission', element: <Admission /> },
];

export default administrationRoutes;
