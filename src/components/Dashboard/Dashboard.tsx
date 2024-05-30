import { DashboardHeader } from '../DashboardHeader';
import { Box } from '../ui';

export const Dashboard: React.FC = () => {
  return (
    <Box position='column'>
      <DashboardHeader />
    </Box>
  );
};
