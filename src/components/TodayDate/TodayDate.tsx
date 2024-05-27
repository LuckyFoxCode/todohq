import { cn } from '@/lib/utils';
import moment from 'moment';

export const TodayDate: React.FC = () => {
  return (
    <div className={cn('flex flex-col text-sm')}>
      <p className='font-semibold text-[15px] text-center transition-colors text-slate-900 dark:text-white'>
        {moment().format('dddd')}
      </p>
      <p className='text-sky-400'>{moment().format('L')}</p>
    </div>
  );
};
