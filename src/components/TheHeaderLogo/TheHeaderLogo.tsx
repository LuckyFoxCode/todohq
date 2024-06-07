import { cn } from '@/libs/utils';

interface TheHeaderLogoProps {
  className?: string;
}

export const TheHeaderLogo: React.FC<TheHeaderLogoProps> = ({ className }) => {
  return (
    <a
      href='/'
      className={cn('flex w-fit', className)}
    >
      <h1 className='text-3xl text-rose-500'>
        ToDo
        <span className='uppercase transition-colors text-black dark:text-white'>
          hq
        </span>
      </h1>
    </a>
  );
};
