import { AsideNav, AsideUser } from '@/components';
import { Icon } from '@/components/common';
import { FiLogOut } from 'react-icons/fi';

export const Aside: React.FC = () => {
  return (
    <aside className='relative w-[300px] h-[calc(100vh-156px)] px-5 pt-28 pb-8 flex flex-col text-white rounded-e-lg bg-rose-500'>
      <AsideUser
        avatarPath='https://randomuser.me/api/portraits/men/32.jpg'
        userName='Sachin Vadhel'
        userEmail='sachinvadhel@gmail.com'
      />
      <AsideNav />
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
