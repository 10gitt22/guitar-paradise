import React, { useEffect, useState } from 'react';
import { auth } from 'firebaseConfig';
import { onAuthStateChanged, User, UserCredential } from 'firebase/auth';
import { authAPI } from 'api';
import { AuthCredentials } from 'types/types';

export type AuthContextType = {
    currentUser: User | null
    signUpWithEmail: (credentials: AuthCredentials) => Promise<UserCredential>
    loginWithEmail: (credentials: AuthCredentials) => Promise<UserCredential>
    loginWithGoogle: () => Promise<UserCredential>
    logout: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<any> = ({ children }) => {
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

    function loginWithGoogle() {
        return authAPI.loginWithGoogle()
    }

    function logout() {
        return authAPI.logout();
    }

    const value = {
        currentUser,
        signUpWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider