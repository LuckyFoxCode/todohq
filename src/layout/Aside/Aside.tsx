import { Icon } from '@/components/common';
import { routers } from '@/libs/constants';
import { cn } from '@/libs/utils';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const Aside: React.FC = () => {
  return (
    <aside className='relative w-[300px] h-[calc(100vh-156px)] px-5 pt-28 pb-8 flex flex-col text-white rounded-e-lg bg-rose-500'>
      <div className='absolute -top-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center'>
        <img
          className='size-20 mb-3 rounded-full bg-rose-400'
          src='https://randomuser.me/api/portraits/men/32.jpg'
          alt='user photo'
        />
        <h2 className='font-semibold'>Sachin Vadhel</h2>
        <p className='text-xs'>sachinvadhel@gmail.com</p>
      </div>

      <ul className='flex flex-col flex-1 gap-y-[10px] overflow-y-auto'>
        {routers.map((router) => (
          <li key={router.name}>
            <NavLink
              to={router.path}
              className={({ isActive }) =>
                cn(
                  'flex p-4 rounded-[14px] transition-colors bg-transparent text-white hover:bg-white/70 hover:text-rose-500',
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
      <button className='flex p-4 rounded-[14px] transition-colors bg-transparent text-white hover:bg-white hover:text-rose-500'>
        <Icon
          name={FiLogOut}
          size={24}
          className='mr-4'
        />
        <p className='capitalize'>logout</p>
      </button>
    </aside>
  );
};
