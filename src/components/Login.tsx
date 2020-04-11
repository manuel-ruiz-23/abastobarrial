import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { loginWithFacebook } from '../firebase';

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);

  function handleLogin() {
    const authUser = loginWithFacebook();
    console.log('app', authUser);

    login(authUser.name, authUser.uid, authUser.photoUrl);
  }

  return (
    <div onClick={handleLogin}>Login</div>
  );
};

export default Login;
