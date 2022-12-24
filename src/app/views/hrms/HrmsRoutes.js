import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const LeaveManagement = Loadable(lazy(() => import('./LeaveManagement')));
const StaffManagement = Loadable(lazy(() => import('./StaffManagement')));

const hrmsRoutes = [
  { path: '/hrms/leave-management', element: <LeaveManagement /> },
  { path: '/hrms/staff-management', element: <StaffManagement /> },
  // { path: '/academic/administration', element: <ForgotPassword /> },
  // { path: '/academic/404', element: <NotFound /> },
];

export default hrmsRoutes;
