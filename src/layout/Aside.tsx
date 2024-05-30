import { AsideNav, AsideUserInfo } from '@/components';

export const Aside: React.FC = () => {
  return (
    <aside className='fixed top-[152px] left-0 w-full h-[calc(100dvh-152px)] max-w-[330px] pt-28 px-5 pb-8 flex flex-col rounded-r-lg transition-all text-white bg-rose-500'>
      <AsideUserInfo />
      <AsideNav />
    </aside>
  );
};
