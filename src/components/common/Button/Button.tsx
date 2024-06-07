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
        'flex justify-center items-center p-2 rounded-lg transition-all bg-rose-500 text-white hover:bg-rose-600 hover:text-slate-700',
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
