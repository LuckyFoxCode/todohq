import { ThemeSwitcher, TodayDate } from '@/components';
import { Icon } from '@/components/ui';
import { CiCalendar } from 'react-icons/ci';

export const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between transition-colors bg-[#f8f8f8] dark:bg-slate-800 pt-8 pb-6 px-[70px]'>
      <a
        href='/'
        className='flex font-semibold text-3xl text-rose-500'
      >
        Todo
        <span className='transition-colors text-slate-900 dark:text-white'>
          HQ
        </span>
      </a>
      <div className='flex items-center'>
        <div className='flex gap-x-2 mr-10'>
          <button className='p-2 rounded-lg bg-rose-500 text-white transition-colors hover:bg-rose-400 focus:outline-none'>
            <Icon
              size={18}
              name={CiCalendar}
            />
          </button>
          <ThemeSwitcher />
        </div>
        <TodayDate />
      </div>
    </header>
  );
};
