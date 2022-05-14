import { auth, firestore } from "firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, DocumentData, DocumentReference, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { FirestoreUser } from "types/models";

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
    return userForFirestore;
  },
	async loginWithEmail(email: string, password: string) {
		const logedUser = await signInWithEmailAndPassword(
			auth,
			email,
			password
		)
		
		const userFromFirestore = await userAPI.getUser(logedUser.user.uid)
		return userFromFirestore.exists() ? userFromFirestore.data() : null
	},
  async logout() {
    return signOut(auth);
  },
};

export const userAPI = {
	async getUser(id: string) {
		const user = await getDoc(doc(firestore, "users", id))
		return user
	},
  async addUser(userData: FirestoreUser) {
    await setDoc(doc(firestore, 'users', userData.id), {
				...userData
		});
  },
  async updateUser(id: string, userData: DocumentReference<DocumentData>) {
      const docRef = doc(firestore, "users", id)
			await updateDoc(docRef, {
				...userData,
				id: id
			})
  }
};

