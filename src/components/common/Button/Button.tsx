import { cn } from '@/libs/utils';
import { IconType } from 'react-icons';
import { Icon } from '../Icon';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  iconName: IconType;
  iconSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  iconName,
  iconSize,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-lg bg-rose-500 p-2 text-white transition-all hover:bg-rose-600 hover:text-slate-700',
        className,
      )}
    >
      <Icon
        name={iconName}
        size={iconSize}
      />
    </button>
  );
};
