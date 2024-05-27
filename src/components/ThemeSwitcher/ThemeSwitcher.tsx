import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { Icon } from '../ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type='button'
      onClick={handleToggleTheme}
      className={cn(
        'p-2 rounded-lg bg-rose-500 text-white transition-colors hover:bg-rose-400 focus:outline-none',
        className,
      )}
    >
      <Icon
        size={18}
        name={theme === 'light' ? CiLight : CiDark}
      />
    </button>
  );
};
