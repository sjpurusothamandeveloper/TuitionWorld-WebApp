// import {  } from '@mui/icons-material';                     // use mui icons

export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  // { label: 'ACADEMICS', type: 'label' },
  {
    name: 'Academics',
    icon: 'classroom',
    children: [
      { name: 'Classroom Setup', iconText: 'CS', path: '/academic/classroom-setup' },
      { name: 'Student Attendance', iconText: 'SA', path: '/academic/student-attendance' },
    ],
  },
  {
    name: 'HRMS',
    icon: 'person',
    children: [
      { name: 'Staff Management', iconText: 'SM', path: '/hrms/staff-management' },
      { name: 'Leave Management', iconText: 'LM', path: '/hrms/leave-management' },
    ],
  },
  {
    name: 'Administration',
    icon: 'money',
    children: [
      { name: 'Admission', iconText: 'AD', path: '/administration/admission' },
    ],
  },
  { name: 'Result', path: '/result', icon: 'handshake'  },
  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' },
  //     { name: 'Landing', iconText: '404', path: '/session/404' },
  //   ],
  // },
  // {
  //   name: 'Student',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' },
  //     { name: 'Landing', iconText: '404', path: '/session/404' },
  //   ],
  // },
  // { label: 'Components', type: 'label' }, //Sub heading
  // {
  //   name: 'Components',
  //   icon: 'favorite',
  //   badge: { value: '30+', color: 'secondary' },
  //   children: [
  //     { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
  //     { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
  //     { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
  //     { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
  //     { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
  //     { name: 'Form', path: '/material/form', iconText: 'F' },
  //     { name: 'Icons', path: '/material/icons', iconText: 'I' },
  //     { name: 'Menu', path: '/material/menu', iconText: 'M' },
  //     { name: 'Progress', path: '/material/progress', iconText: 'P' },
  //     { name: 'Radio', path: '/material/radio', iconText: 'R' },
  //     { name: 'Switch', path: '/material/switch', iconText: 'S' },
  //     { name: 'Slider', path: '/material/slider', iconText: 'S' },
  //     { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
  //     { name: 'Table', path: '/material/table', iconText: 'T' },
  //   ],
  // },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  // },
  // {
  //   name: 'Documentation',
  //   icon: 'launch',
  //   type: 'extLink',
  //   path: 'http://demos.ui-lib.com/matx-react-doc/',
  // },
];
