import { IconType } from 'react-icons';

export interface RouteError {
  statusText?: string;
  message?: string;
}

export interface NavLinks {
  id: number;
  to: string;
  title: string;
  iconName: IconType;
}
