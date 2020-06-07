import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { loginWithFacebook, loginWithGoogle } from '../firebase';

const Login = () => {
  const { login, state } = useContext(AuthContext);

  async function handleLogin() {
    const authUser = await loginWithFacebook();
    console.log('app', authUser);

    login(authUser.name, authUser.uid, authUser.photoUrl);
  }

  async function loginGoogle() {
    const authUser = await loginWithGoogle();
    console.log(authUser)
  }

  return (
    <div>
      <div onClick={handleLogin}>Login facebook</div>
      <div onClick={loginGoogle}>Login google</div>
      {JSON.stringify(state, null, 2)}
    </div>
  );
};

export default Login;
