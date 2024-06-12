import { routers } from '@/libs/constants';
import { cn } from '@/libs/utils';
import { NavLink } from 'react-router-dom';
import { Icon } from '../common';

export const AsideNav: React.FC = () => {
  return (
    <nav className='mb-[10px] flex-1 overflow-y-auto'>
      <ul className='flex flex-col gap-y-[10px]'>
        {routers.map((router) => (
          <li key={router.name}>
            <NavLink
              to={router.path}
              className={({ isActive }) =>
                cn(
                  'flex rounded-[14px] bg-transparent p-4 text-white transition-colors hover:bg-white/70 hover:text-rose-500',
                  isActive && 'bg-white text-rose-500',
                )
              }
            >
              <Icon
                name={router.iconName}
                size={24}
                className='mr-4'
              />
              <p className='capitalize'>{router.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
