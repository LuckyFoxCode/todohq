import { Aside, Content, Header } from '@/layout';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Aside />
      <main className=' flex justify-end pr-[70px] pb-8'>
        <Content />
      </main>
    </>
  );
};
