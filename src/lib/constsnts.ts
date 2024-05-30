import {
  CiBoxList,
  CiGrid41,
  CiSettings,
  CiSquareQuestion,
  CiViewList,
  CiWarning,
} from 'react-icons/ci';
import { NavLinks } from './types';

export const routers: NavLinks[] = [
  { id: 1, to: '/', title: 'dashboard', iconName: CiGrid41 },
  { id: 2, to: '/vital-task', title: 'vital task', iconName: CiWarning },
  { id: 3, to: '/my-task', title: 'my task', iconName: CiBoxList },
  { id: 4, to: '/category', title: 'task category', iconName: CiViewList },
  { id: 5, to: '/settings', title: 'settings', iconName: CiSettings },
  { id: 6, to: '/help', title: 'help', iconName: CiSquareQuestion },
];
