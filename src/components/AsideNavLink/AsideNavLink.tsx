import { NavLinks } from '@/lib/types';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { Icon } from '../ui';

interface AsideNavLinkProps {
  router: NavLinks;
}

export const AsideNavLink: React.FC<AsideNavLinkProps> = ({ router }) => {
  return (
    <li>
      <NavLink
        to={router.to}
        className={({ isActive }) =>
          cn(
            isActive ? 'bg-white text-rose-500' : 'text-white',
            'flex items-center capitalize p-4 rounded-xl transition-all hover:bg-white hover:text-rose-500',
          )
        }
      >
        <Icon
          name={router.iconName}
          size={24}
          className='mr-5'
        />
        {router.title}
      </NavLink>
    </li>
  );
};
