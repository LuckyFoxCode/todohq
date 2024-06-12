import { cn } from '@/libs/utils';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { PiBellSimple, PiCalendarBlank } from 'react-icons/pi';
import { Button } from '../common';

interface TheHeaderBtnGroupProps {
  className?: string;
}

export const TheHeaderBtnGroup: React.FC<TheHeaderBtnGroupProps> = ({
  className,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={cn('flex items-center justify-center gap-x-2', className)}>
      <Button
        iconName={PiBellSimple}
        iconSize={24}
      />
      <Button
        iconName={PiCalendarBlank}
        iconSize={24}
      />
      <Button
        onClick={handleToggleTheme}
        iconName={theme === 'light' ? CiLight : CiDark}
        iconSize={24}
      />
    </div>
  );
};
