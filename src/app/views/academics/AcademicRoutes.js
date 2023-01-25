import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const ClassroomSetup = Loadable(lazy(() => import('./ClassroomSetup')));
const StudentAttendance = Loadable(lazy(() => import('./StudentAttendance')));
const SubjectManagement = Loadable(lazy(() => import('./ClassManagement')));
const StaffForm = Loadable(lazy(() => import('./StaffForm')));
const StudentForm = Loadable(lazy(() => import('./StudentForm')));

const academicRoutes = [
  { path: '/academic/classroom-setup', element: <ClassroomSetup /> },
  { path: '/academic/student-attendance', element: <StudentAttendance /> },
  { path: '/academic/class-management', element: <SubjectManagement /> },
  { path: '/academic/new-staff', element: <StaffForm /> },
  { path: '/academic/new-student', element: <StudentForm /> }
];

export default academicRoutes;
