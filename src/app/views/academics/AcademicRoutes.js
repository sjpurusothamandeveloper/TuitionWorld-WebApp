import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ClassroomSetup = Loadable(lazy(() => import('./ClassroomSetup')));
const StudentAttendance = Loadable(lazy(() => import('./StudentAttendance')));

const academicRoutes = [
  { path: '/academic/classroom-setup', element: <ClassroomSetup /> },
  { path: '/academic/student-attendance', element: <StudentAttendance /> },
  // { path: '/academic/administration', element: <ForgotPassword /> },
  // { path: '/academic/404', element: <NotFound /> },
];

export default academicRoutes;
