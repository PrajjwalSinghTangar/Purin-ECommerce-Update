import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCN-8lPEVP_xL4W_9xjuUB7nFycTJx3FI",
  authDomain: "purin-ecommerceapi.firebaseapp.com",
  projectId: "purin-ecommerceapi",
  storageBucket: "purin-ecommerceapi.appspot.com",
  messagingSenderId: "737298741957",
  appId: "1:737298741957:web:ee8b3ba4a5440ff89f4eac",
  measurementId: "G-B6MDWTFBNE"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  promp: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const getSliderAndDocuments = async () => {
  const collectionRef = collection(db, "slider");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const sliderMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, slide} = docSnapshot.data();
    acc[title.toLowerCase()] =  (slide);
    return acc;
  }, {});
  return sliderMap;
};

export const getMaxSlideAndDocuments = async () => {
  const collectionRef = collection(db, "slider");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const maxSlideMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, length} = docSnapshot.data();
    acc[title.toLowerCase()] =  (length);
    return acc;
  }, {});
  return maxSlideMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export default firebaseApp;