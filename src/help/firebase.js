import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCp1TJQU1c3RUWxH8_JjDmtM_gi03hqnmw',
  authDomain: 'vue-resume-190da.firebaseapp.com',
  databaseURL: 'https://vue-resume-190da-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vue-resume-190da',
  storageBucket: 'vue-resume-190da.firebasestorage.app',
  messagingSenderId: '1000711750136',
  appId: '1:1000711750136:web:629d937b8637bd6964d60d',
  measurementId: 'G-H6F6B0B6Z4',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore(app);

export const provider = new GoogleAuthProvider()
