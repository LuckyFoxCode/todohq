import { BiTask } from 'react-icons/bi';
import { BsListTask } from 'react-icons/bs';
import { IoMdHelpCircle, IoMdSettings } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { PiWarning } from 'react-icons/pi';
import { Routes } from './types';

export const routers: Routes[] = [
  {
    path: '/',
    name: 'dashboard',
    iconName: MdSpaceDashboard,
  },
  {
    path: '/vital-task',
    name: 'vital task',
    iconName: PiWarning,
  },
  {
    path: '/my-task',
    name: 'my task',
    iconName: BiTask,
  },
  {
    path: '/task-categories',
    name: 'task categories',
    iconName: BsListTask,
  },
  {
    path: '/settings',
    name: 'settings',
    iconName: IoMdSettings,
  },
  {
    path: '/help',
    name: 'help',
    iconName: IoMdHelpCircle,
  },
];
