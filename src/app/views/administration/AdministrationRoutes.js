import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Admission = Loadable(lazy(() => import('./Admission')));
const EnquiryForm = Loadable(lazy(() => import('./EnquiryForm')));
const AdmissionDetails = Loadable(lazy(() => import('./AdmissionDetails')));

const administrationRoutes = [
  { path: 'administration/admission/details', element: <AdmissionDetails /> },
  { path: '/administration/admission/enquiry', element: <EnquiryForm /> }
  // { path: '/administration/admission/details', element: <AdmissionDetails /> }
];

export default administrationRoutes;
