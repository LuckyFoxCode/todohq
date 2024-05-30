import { Dashboard } from '@/components';
import { Box } from '@/components/ui';

export const Content: React.FC = () => {
  return (
    <Box className='w-full max-w-[960px]'>
      <Dashboard />
    </Box>
  );
};
