import { Box } from '@/components/ui';
import { Outlet } from 'react-router-dom';

export const Content: React.FC = () => {
  return (
    <Box className='w-2/3'>
      <Outlet />
    </Box>
  );
};
