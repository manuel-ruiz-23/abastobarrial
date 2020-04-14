import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { loginWithFacebook } from '../firebase';
import TablonAnuncios from './TablonAnuncios';
import TablonItem from './TablonItem';

const Login: React.FC = () => {
  const { login, state } = useContext(AuthContext);

  async function handleLogin() {
    const authUser = await loginWithFacebook();
    console.log('app', authUser);

    login(authUser.name, authUser.uid, authUser.photoUrl);
  }

  return (
    <div>
      <div onClick={handleLogin}>Login</div>
      {JSON.stringify(state, null, 2)}
      <TablonAnuncios>
        <TablonItem titulo="simon" date="que si" body="chido" contacto="por ahi" />
        <TablonItem titulo="simon" date="que si" body="chido" contacto="por ahi" />
      </TablonAnuncios>
    </div>
  );
};

export default Login;
