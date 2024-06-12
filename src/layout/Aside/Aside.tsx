import { AsideNav, AsideUser } from '@/components';
import { Icon } from '@/components/common';
import { FiLogOut } from 'react-icons/fi';

export const Aside: React.FC = () => {
  return (
    <aside className='relative flex h-[calc(100vh-156px)] w-[300px] flex-col rounded-e-lg bg-rose-500 px-5 pb-8 pt-28 text-white'>
      <AsideUser
        avatarPath='https://randomuser.me/api/portraits/men/32.jpg'
        userName='Sachin Vadhel'
        userEmail='sachinvadhel@gmail.com'
      />
      <AsideNav />
      <button className='flex rounded-[14px] bg-transparent p-4 text-white transition-colors hover:bg-white hover:text-rose-500'>
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
