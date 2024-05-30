import { Box } from '../ui';

export const DashboardHeader: React.FC = () => {
  return (
    <Box className='mb-9'>
      <p className='font-semibold text-[36px] transition-colors text-slate-900 dark:text-white'>
        Welcome back, Sachin 👋
      </p>
    </Box>
  );
};
