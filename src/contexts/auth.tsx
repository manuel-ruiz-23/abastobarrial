import React, { createContext, useState } from 'react';

interface Auth {
  uid: string
  name: string;
  photoUrl: string;
  authenticated: boolean;
}

const InitialState: Auth = {
  authenticated: false,
  uid: '',
  name: '',
  photoUrl: ''
}

const AuthContext = createContext({
  state: InitialState,
  login: (name: string, uid: string, photoUrl: string) => {},
  logOut: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(InitialState);

  function login(name: string, uid: string, photoUrl: string): void {
    setAuth({
      uid,
      name,
      photoUrl,
      authenticated: true
    });
  }

  function logOut(): void {
    if (auth.authenticated) {
      setAuth(InitialState)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        state: auth,
        login,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthContextProvider };
