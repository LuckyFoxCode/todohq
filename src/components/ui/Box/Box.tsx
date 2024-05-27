import { cn } from '@/lib/utils';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  position?: 'row' | 'column';
}
export const Box: React.FC<BoxProps> = ({
  children,
  className,
  position = 'row',
}) => {
  return (
    <div
      className={cn(
        className,
        `flex ${position === 'row' ? 'flex-row' : 'flex-col'}`,
      )}
    >
      {children}
    </div>
  );
};
