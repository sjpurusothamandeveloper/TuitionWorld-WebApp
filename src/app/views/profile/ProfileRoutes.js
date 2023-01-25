import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ProfileManagement = Loadable(lazy(() => import('./Profile')));

const profileRoutes = [
  { path: '/profile/view/:id', element: <ProfileManagement /> },
];

export default profileRoutes;
