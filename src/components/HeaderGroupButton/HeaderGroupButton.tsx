import { CiBellOn, CiCalendar } from 'react-icons/ci';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Box, Icon } from '../ui';

export const HeaderGroupButton: React.FC = () => {
  return (
    <Box className='flex gap-x-2 mr-10'>
      <button className='p-2 rounded-lg bg-rose-500 text-white transition-colors hover:bg-rose-400 focus:outline-none'>
        <Icon
          size={18}
          name={CiBellOn}
        />
      </button>
      <button className='p-2 rounded-lg bg-rose-500 text-white transition-colors hover:bg-rose-400 focus:outline-none'>
        <Icon
          size={18}
          name={CiCalendar}
        />
      </button>
      <ThemeSwitcher />
    </Box>
  );
};
