import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import academicRoutes from './views/academics/AcademicRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import hrmsRoutes from 'app/views/hrms/HrmsRoutes';
import administrationRoutes from './views/administration/AdministrationRoutes';
import resultRoutes from './views/result/ResultRoutes';
import ProfileRoutes from './views/profile/ProfileRoutes';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes, ...academicRoutes, ...hrmsRoutes, ...administrationRoutes, ...resultRoutes, ...ProfileRoutes],
  },
  ...sessionRoutes, 
  { path: '/', element: <Navigate to="/session/signin" /> },
  // { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
