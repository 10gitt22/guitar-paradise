import { authAPI } from 'api';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FirestoreUser } from 'types/models';
import { AuthCredentials } from 'types/types';

export type AuthContextType = {
    currentUser: User | null
    signUpWithEmail: (credentials: AuthCredentials) => Promise<FirestoreUser>
    loginWithEmail: (credentials: AuthCredentials) => Promise<DocumentData | null>
    logout: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<any> = ({ children }) => {
    const auth = getAuth()
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })   
        return unsubscribe;
    }, [])

    function signUpWithEmail(credentials: AuthCredentials) {
        return authAPI.signUpWithEmail(credentials.email, credentials.password)
    }

    function loginWithEmail(credentials: AuthCredentials) {
        return authAPI.loginWithEmail(credentials.email, credentials.password)
    }

    function logout() {
        return authAPI.logout();
    }

    const value = {
        currentUser,
        signUpWithEmail,
        loginWithEmail,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider