export const AsideNav: React.FC = () => {
  return (
    <nav className='flex flex-col h-full'>
      <ul className='flex flex-col flex-1 mb-2'>
        <li className='p-4 rounded-xl bg-white text-rose-500'>Dashboard</li>
      </ul>
      <button className='flex flex-shrink-0 p-4 rounded-xl bg-white text-rose-500'>
        Logout
      </button>
    </nav>
  );
};
