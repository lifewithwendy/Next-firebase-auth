'use client'

import { useContext, createContext, useState, useEffect } from 'react';
import { 
    signInWithPopup, 
    signOut, 
    GoogleAuthProvider, 
    GithubAuthProvider,
    onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser, googleSignIn, githubSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
