import { routers } from '@/lib/constsnts';
import { CiLogout } from 'react-icons/ci';
import { AsideNavLink } from '../AsideNavLink';
import { Icon } from '../ui';

export const AsideNav: React.FC = () => {
  return (
    <nav className='flex flex-col h-full'>
      <ul className='flex flex-col flex-1 gap-y-2 mb-2'>
        {routers.map((router) => (
          <AsideNavLink
            key={router.id}
            router={router}
          />
        ))}
      </ul>
      <button className='flex flex-shrink-0 items-center p-4 rounded-xl transition-all text-white hover:bg-white hover:text-rose-500'>
        <Icon
          name={CiLogout}
          size={24}
          className='mr-5'
        />
        Logout
      </button>
    </nav>
  );
};
