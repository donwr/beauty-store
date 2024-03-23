import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebaseClient'; // Import the Firebase app instance

export async function signIn(email, password) {
  const auth = getAuth(app); // Get the auth instance using the Firebase app instance
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in:", error);
  }
}
