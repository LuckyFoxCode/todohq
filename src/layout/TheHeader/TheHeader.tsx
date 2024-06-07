import { TheHeaderBtnGroup, TheHeaderDate, TheHeaderLogo } from '@/components';

export const TheHeader: React.FC = () => {
  return (
    <header className='flex justify-between pt-8 px-[70px] pb-7 mb-14 transition-all shadow-md shadow-black/5 bg-[#f8f8f8] dark:bg-slate-950'>
      <TheHeaderLogo />
      <div className='flex gap-x-10'>
        <TheHeaderBtnGroup />
        <TheHeaderDate />
      </div>
    </header>
  );
};
