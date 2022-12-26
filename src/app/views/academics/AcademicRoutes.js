import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const ClassroomSetup = Loadable(lazy(() => import('./ClassroomSetup')));
const StudentAttendance = Loadable(lazy(() => import('./StudentAttendance')));
const SubjectManagement = Loadable(lazy(() => import('./SubjectManagement')));
const AdditionForm = Loadable(lazy(() => import('./AdditionForm')));
const StudentAdditionForm = Loadable(lazy(() => import('./AddStudentForm')));

const academicRoutes = [
  { path: '/academic/classroom-setup', element: <ClassroomSetup /> },
  { path: '/academic/student-attendance', element: <StudentAttendance /> },
  { path: '/academic/subject-management', element: <SubjectManagement /> },
  { path: '/academic/addition-form', element: <AdditionForm /> },
  { path: '/academic/add-student-form', element: <StudentAdditionForm /> }
];

export default academicRoutes;
