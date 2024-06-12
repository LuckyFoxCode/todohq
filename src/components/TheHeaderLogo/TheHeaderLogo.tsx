import { cn } from '@/libs/utils';
import { Link } from 'react-router-dom';

interface TheHeaderLogoProps {
  className?: string;
}

export const TheHeaderLogo: React.FC<TheHeaderLogoProps> = ({ className }) => {
  return (
    <Link
      to='/'
      className={cn('flex w-fit', className)}
    >
      <h1 className='text-3xl text-rose-500'>
        ToDo
        <span className='uppercase text-black transition-colors dark:text-white'>
          hq
        </span>
      </h1>
    </Link>
  );
};
