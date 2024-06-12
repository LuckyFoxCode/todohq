interface AsideUserProps {
  avatarPath?: string;
  userName?: string;
  userEmail?: string;
}

export const AsideUser: React.FC<AsideUserProps> = ({
  avatarPath,
  userName,
  userEmail,
}) => {
  return (
    <section className='absolute -top-[40px] left-1/2 flex -translate-x-1/2 flex-col items-center'>
      <img
        className='mb-3 size-20 rounded-full bg-rose-400'
        src={avatarPath}
        alt={userName}
      />
      <h2 className='font-semibold'>{userName}</h2>
      <p className='text-xs'>{userEmail}</p>
    </section>
  );
};
