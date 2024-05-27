export const HeaderLogo: React.FC = () => {
  return (
    <a
      href='/'
      className='flex font-semibold text-3xl text-rose-500'
    >
      Todo
      <span className='transition-colors text-slate-900 dark:text-white'>
        HQ
      </span>
    </a>
  );
};
