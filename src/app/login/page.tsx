import { PropsWithChildren } from 'react';

interface LoginProps extends PropsWithChildren<{}> {}

const Login = async ({}: LoginProps) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return (
    <>
      <h1>Hello from Login</h1>
      <ul>
        {data.slice(0, 1).map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Login;
