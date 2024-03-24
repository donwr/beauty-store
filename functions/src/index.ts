import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();

export const initializeUserProfile =
functions.auth.user().onCreate(async (user) => {
  const usersCollection = admin.firestore().collection("users");
  const likedItemsCollection = admin.firestore().collection("likedItems");
  const cartCollection = admin.firestore().collection("cart");

  // Create a reference to the new user document
  const userDocRef = usersCollection.doc(user.uid);

  // Initialize the user document
  await userDocRef.set({
    // No user-specific default fields yet
  });

  // Create a document for liked items with the same ID as the user
  // Initialize the likedItems document with an empty products array
  const likedItemsDocRef = likedItemsCollection.doc(user.uid);
  await likedItemsDocRef.set({
    products: [], // Initialize with an empty array
  });


  // Create a document for the cart with the same ID as the user
  const cartDocRef = cartCollection.doc(user.uid);
  await cartDocRef.set({
    cartId: "", // You could generate a cartId here if needed
    lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    userId: userDocRef, // This sets a reference to the user's document
  });

  return null; // Cloud functions should return null or a value that resolves
});
// Newline at end of file
