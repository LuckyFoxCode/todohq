import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Icon } from '../ui';

export const HeaderSearch: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(value);
    setValue('');
  };

  return (
    <form
      className='relative min-w-[695px] flex'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={value}
        onChange={getInputValue}
        placeholder='Search your task here...'
        className='w-full py-[10px] px-[15px] font-montserrat font-semibold text-xs transition-all rounded-md text-slate-400 bg-white shadow-sm shadow-slate-200 focus:outline-none dark:bg-slate-700 dark:text-slate-300 dark:shadow-slate-700'
      />
      <button
        type='submit'
        className='absolute top-0 right-0 p-[10px] transition-all bg-rose-500 text-white rounded-md hover:bg-rose-400 focus:outline-none focus:bg-rose-400'
      >
        <Icon
          size={16}
          name={CiSearch}
          className=''
        />
      </button>
    </form>
  );
};
