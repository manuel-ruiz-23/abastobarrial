declare function loginWithFacebook(): {
  uid: string,
  name: string,
  photoUrl: string
};

declare function loginWithGoogle(): {
  uid: string,
  name: string,
  photoUrl: string
};

export {loginWithFacebook};