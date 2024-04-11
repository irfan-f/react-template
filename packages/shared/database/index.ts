import { getFirestore, doc, getDoc, collection, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword, updateEmail, EmailAuthProvider, reauthenticateWithCredential, updateProfile } from 'firebase/auth';
let db: any;
let auth: any;

export const initializeDatabase = (app) => {
  db = getFirestore(app);
  auth = getAuth(app);
};

const checkForDB = () => {
  if (!db) {
    throw new Error('Database not initialized');
  }
}

export const getCollection = async (collectionName: string) => {
  checkForDB();
  const q = query(collection(db, collectionName));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
};

export const getDocument = async (collectionName: string, document: string) => {
  checkForDB();
  const docRef = doc(db, collectionName, document);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

export const addDocument = async (collectionName: string, data: any) => {
  checkForDB();
  await addDoc(collection(db, collectionName), data);
};

export const updateDocument = async (collectionName: string, document: string, data: any) => {
  checkForDB();
  await updateDoc(doc(db, collectionName, document), data);
};

export const deleteDocument = async (collectionName: string, document: string) => {
  checkForDB();
  await deleteDoc(doc(db, collectionName, document));
};

export const getCollectionListener = (collectionName: string, callback: (data: any) => void) => {
  checkForDB();
  const q = query(collection(db, collectionName), orderBy('createdAt'));
  return onSnapshot(q, snapshot => {
    callback(snapshot.docs.map(doc => doc.data()));
  });
};

export const getDocumentListener = (collectionName: string, document: string, callback: (data: any) => void) => {
  checkForDB();
  return onSnapshot(doc(db, collectionName, document), snapshot => {
    callback(snapshot.data());
  });
};

export const addDocumentListener = (collectionName: string, data: any, callback: (data: any) => void) => {
  checkForDB();
  return addDoc(collection(db, collectionName), data).then(async docRef => {
    const docSnap = await getDoc(docRef);
    callback(docSnap.data());
  });
};

export const updateDocumentListener = (collectionName: string, document: string, data: any, callback: (data: any) => void) => {
  checkForDB();
  return updateDoc(doc(db, collectionName, document), data).then(() => {
    getDoc(doc(db, collectionName, document)).then(snapshot => {
      callback(snapshot.data());
    });
  });
};

export const deleteDocumentListener = (collectionName: string, document: string, callback: () => void) => {
  checkForDB();
  return deleteDoc(doc(db, collectionName, document)).then(() => {
    callback();
  });
};

export const createUser = async (data: any) => {
  checkForDB();
  const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
  return user;
};

export const loginUser = async (data: any) => {
  checkForDB();
  const user = await signInWithEmailAndPassword(auth, data.email, data.password);
  return user;
};

export const logoutUser = async () => {
  checkForDB();
  await signOut(auth);
};

export const resetPassword = async (email: string) => {
  checkForDB();
  await sendPasswordResetEmail(auth, email);
};

export const updateUserPassword = async (password: string) => {
  checkForDB();
  await updatePassword(auth.currentUser, password);
}

export const updateUserEmail = async (email: string) => {
  checkForDB();
  await updateEmail(auth.currentUser, email);
}

export const reauthenticate = async (password: string) => {
  checkForDB();
  const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
  return reauthenticateWithCredential(auth.currentUser, credential);
}

export const updateUser = async (data: any) => {
  checkForDB();
  await updateProfile(auth.currentUser, data);
}

export const updateUserData = async (data: any) => {
  checkForDB();
  await updateDoc(doc(db, 'users', auth.currentUser.uid), data);
}

export const getUserData = async () => {
  checkForDB();
  const docRef = doc(db, 'users', auth.currentUser.uid);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
}

export const getUserDataListener = (callback: (data: any) => void) => {
  checkForDB();
  return onSnapshot(doc(db, 'users', auth.currentUser.uid), snapshot => {
    callback(snapshot.data());
  });
}

export const getLeaderboard = async () => {
  checkForDB();
  const q = query(collection(db, 'users'), orderBy('score', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}

export const getLeaderboardListener = (callback: (data: any) => void) => {
  checkForDB();
  const q = query(collection(db, 'users'), orderBy('score', 'desc'));
  return onSnapshot(q, snapshot => {
    callback(snapshot.docs.map(doc => doc.data()));
  });
}

export const getTheme = async () => {
  checkForDB();
  const docRef = doc(db, 'settings', 'theme');
  const snapshot = await getDoc(docRef);
  return snapshot.data();
}

export const getThemeListener = (callback: (data: any) => void) => {
  checkForDB();
  return onSnapshot(doc(db, 'settings', 'theme'), snapshot => {
    callback(snapshot.data());
  });
}

export const setTheme = async (data: any) => {
  checkForDB();
  await updateDoc(doc(db, 'settings', 'theme'), data);
}

export const setColor = async (data: any) => {
  checkForDB();
  await updateDoc(doc(db, 'settings', 'theme'), data);
}

export const getAppearance = async () => {
  checkForDB();
  const docRef = doc(db, 'settings', 'appearance');
  const snapshot = await getDoc(docRef);
  return snapshot.data();
}

export const getAppearanceListener = (callback: (data: any) => void) => {
  checkForDB();
  return onSnapshot(doc(db, 'settings', 'appearance'), snapshot => {
    callback(snapshot.data());
  });
}

export const setAppearance = async (data: any) => {
  checkForDB();
  await updateDoc(doc(db, 'settings', 'appearance'), data);
}
