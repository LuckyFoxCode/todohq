import { Box } from '../ui';
import { DashboardHeader } from './DashboardHeader';

export const Dashboard: React.FC = () => {
  return (
    <Box position='column'>
      <DashboardHeader />
    </Box>
  );
};
