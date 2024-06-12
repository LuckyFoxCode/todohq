import { TheHeaderBtnGroup, TheHeaderDate, TheHeaderLogo } from '@/components';

export const TheHeader: React.FC = () => {
  return (
    <header className='mb-14 flex justify-between bg-[#f8f8f8] px-[70px] pb-7 pt-8 shadow-md shadow-black/5 transition-all dark:bg-slate-950'>
      <TheHeaderLogo />
      <div className='flex gap-x-10'>
        <TheHeaderBtnGroup />
        <TheHeaderDate />
      </div>
    </header>
  );
};
