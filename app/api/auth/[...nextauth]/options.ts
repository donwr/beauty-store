import firebaseApp from '@/firebase/firebaseClient'; // Adjust the import based on your project structure
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface DefaultUser {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  emailVerified?: boolean;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          const auth = getAuth(firebaseApp);
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );

          // Assuming your user model and the AdapterUser align
          const user = userCredential.user;
          if (user && user.emailVerified) {
            return { id: user.uid, email: user.email, emailVerified: user.emailVerified };
          } else {
            throw new Error('Email not verified');
          }
        } catch (error) {
          console.error('Failed to sign in with email and password', error);
          return null;
        }
      }
    })
  ],
  
};
