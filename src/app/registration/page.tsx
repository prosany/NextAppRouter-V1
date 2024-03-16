import { PropsWithChildren } from 'react';

interface RegistrationProps extends PropsWithChildren<{}> {}

const Registration = ({ children }: RegistrationProps) => {
  return (
    <>
      <h1>Hello from Registration</h1>
    </>
  );
};

export default Registration;
