import Loadable from 'app/components/Loadable';
import { lazy } from 'react';



const LeaveManagement = Loadable(lazy(() => import('./LeaveManagement')));
const StaffManagement = Loadable(lazy(() => import('./StaffManagement')));
const StaffAttendance = Loadable(lazy(() => import('./StaffAttendance')));
const ApplyLeave = Loadable(lazy(() => import('./ApplyLeave')));

const hrmsRoutes = [
  { path: '/hrms/leave-management', element: <LeaveManagement /> },
  { path: '/hrms/apply-leave', element: <ApplyLeave /> },
  { path: '/hrms/staff-management', element: <StaffManagement /> },
  { path: '/hrms/staff-attendance', element: <StaffAttendance /> },
 
];

export default hrmsRoutes;
