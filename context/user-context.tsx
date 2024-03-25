"use client";
import { app } from '@/firebase/firebaseClient';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  cartId: string | null;
  setCartId: React.Dispatch<React.SetStateAction<string | null>>;
};

const defaultUserContextValue: UserContextType = {
  user: null,
  setUser: () => {},
  cartId: null,
  setCartId: () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContextValue);

export const useUser = () => useContext(UserContext);

type User = {
  uid: string;
  email: string | null;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        };
        setUser(userData);

        // Fetch cartId from Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          if (userData.cartId) {
            setCartId(userData.cartId);
          }
        }
      } else {
        setUser(null);
        setCartId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    setUser,
    cartId,
    setCartId,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
