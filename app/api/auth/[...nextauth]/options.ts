import firebaseApp from '@/firebase/firebaseClient'; // Adjust the path as necessary
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          // Return null or throw an error if credentials are missing
          return null;
        }

        try {
          const auth = getAuth(firebaseApp);
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const user = userCredential.user;

          // Return a user object if authentication is successful
          return { id: user.uid, email: user.email };
        } catch (error) {
          console.error('Failed to sign in with email and password', error);
          return null;
        }
      }
    })
  ]
  // Add your NextAuth configuration here
};
