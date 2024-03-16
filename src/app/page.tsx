import { PropsWithChildren } from 'react';

interface HomeProps extends PropsWithChildren<{}> {}

const Home = ({}: HomeProps) => {
  return (
    <>
      <h1>Hello from Home</h1>
    </>
  );
};

export default Home;
