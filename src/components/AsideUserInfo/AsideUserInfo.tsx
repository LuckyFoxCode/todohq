import { Box } from '../ui';

export const AsideUserInfo: React.FC = () => {
  return (
    <Box
      position='column'
      className='items-center mb-5 absolute -top-10 left-1/2 -translate-x-1/2'
    >
      <Box className='flex justify-center items-center mb-3 size-20 rounded-full bg-rose-300'>
        <span>🦊</span>
      </Box>
      <span className='font-semibold'>Sachin Vadhel</span>
      <span className='text-xs'>sachinvadhel@gmail.com</span>
    </Box>
  );
};
