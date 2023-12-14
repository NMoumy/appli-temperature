import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import firebaseConfig from "./fb-config";

// Initialiser l'appli Firebase
const app = initializeApp(firebaseConfig);

// Obtenir une connexion à la BD Firestore
export const bd = getDatabase(app);