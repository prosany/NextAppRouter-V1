import { PropsWithChildren } from 'react';

interface LoginProps extends PropsWithChildren<{}> {}

const Login = ({}: LoginProps) => {
  return (
    <>
      <h1>Hello from Login</h1>
    </>
  );
};

export default Login;
