import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface IconProps {
  name: IconType;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name: IconComponent,
  size = 16,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <IconComponent size={size} />
    </div>
  );
};
