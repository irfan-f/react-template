import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

let auth: any;
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const checkForAuth = () => {
  if (!auth) {
    throw new Error('Firebase auth has not been initialized');
  }
}

export const initializeAuth = (app) => {
  auth = getAuth(app);
};

export const createUser = async (email: string, password: string) => {
  checkForAuth();
  await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    console.error(error);
  });
};

export const login = async (email, password) => {
  checkForAuth();
  const user = await signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.error(error);
  });
  return user;
};

export const logout = async () => {
  checkForAuth();
  try {
    await auth.signOut();
    return Promise.resolve()
  } catch (e) {
    return Promise.reject(e);
  }
}
