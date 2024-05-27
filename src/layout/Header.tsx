import {
  HeaderGroupButton,
  HeaderLogo,
  HeaderSearch,
  TodayDate,
} from '@/components';
import { Box } from '@/components/ui';

export const Header: React.FC = () => {
  return (
    <header className='pt-8 pb-6 px-[70px] flex items-center justify-between transition-all bg-[#f8f8f8] dark:bg-slate-800 shadow-lg shadow-slate-200 dark:shadow-slate-700'>
      <HeaderLogo />
      <HeaderSearch />
      <Box className='items-center'>
        <HeaderGroupButton />
        <TodayDate />
      </Box>
    </header>
  );
};
