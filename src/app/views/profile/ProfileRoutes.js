import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ProfileManagement = Loadable(lazy(() => import('./Profile')));
const ViewStaff = Loadable(lazy(() => import('./ViewStaff')));
const ViewStudent = Loadable(lazy(() => import('./ViewStudent')));

const profileRoutes = [
  { path: '/profile/view/:id', element: <ProfileManagement /> },
  { path: 'profile/view', element: <ViewStaff /> },
  { path: 'profile/view-student', element: <ViewStudent /> }
];

export default profileRoutes;
