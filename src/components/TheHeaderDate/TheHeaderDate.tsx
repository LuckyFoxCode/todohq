import { cn } from '@/libs/utils';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

interface TheHeaderDateProps {
  className?: string;
}

export const TheHeaderDate: React.FC<TheHeaderDateProps> = ({ className }) => {
  const currentDate = new Date();
  const dayName = format(currentDate, 'EEEE', { locale: enUS });
  const formattedDate = format(currentDate, 'MM/dd/yyyy');

  return (
    <div
      className={cn(
        'flex flex-col items-center font-semibold text-black dark:text-white',
        className,
      )}
    >
      <span>{dayName}</span>
      <span className='text-xs text-cyan-500'>{formattedDate}</span>
    </div>
  );
};
