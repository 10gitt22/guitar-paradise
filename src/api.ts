import { auth, firestore } from "firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { FirestoreUser, Product } from "types/models";

const productsRef = collection(firestore, "products");

export const authAPI = {
  async signUpWithEmail(email: string, password: string) {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userForFirestore: FirestoreUser = {
      id: createdUser.user.uid,
      displayName: createdUser.user.displayName
        ? createdUser.user.displayName
        : createdUser.user.email,
      role: "user",
      photoUrl: createdUser.user.photoURL,
    };
    await userAPI.addUser(userForFirestore);

    return createdUser;
  },
  async loginWithEmail(email: string, password: string) {
    const logedUser = await signInWithEmailAndPassword(auth, email, password);
    return logedUser;
  },
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userResponse = await signInWithPopup(auth, provider);

    const isExist = (await userAPI.getUser(userResponse.user.uid)).exists();

    if (!isExist) {
      const userForFirestore: FirestoreUser = {
        id: userResponse.user.uid,
        displayName: userResponse.user.displayName
          ? userResponse.user.displayName
          : userResponse.user.email,
        role: "user",
        photoUrl: userResponse.user.photoURL,
      };
      await userAPI.addUser(userForFirestore);
    }
    return userResponse;
  },
  async logout() {
    return signOut(auth);
  },
};

export const userAPI = {
  async getUser(id: string) {
    const user = await getDoc(doc(firestore, "users", id));
    return user;
  },
  async addUser(userData: FirestoreUser) {
    await setDoc(doc(firestore, "users", userData.id), {
      ...userData,
    });
  },
  async updateUser(id: string, userData: DocumentReference<DocumentData>) {
    const docRef = doc(firestore, "users", id);
    await updateDoc(docRef, {
      ...userData,
      id: id,
    });
  },
};

export const productsAPI = {
  async getProducts() {
    const productsSnap = await getDocs(productsRef);
    const response = productsSnap.docs.map((product) => product.data());
    return response as Product[];
  },
};
