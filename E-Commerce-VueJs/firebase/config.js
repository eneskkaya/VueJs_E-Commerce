import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoCjpssAD5wgFBeES2qQZoyMQSrgllYGw",
    authDomain: "deneme2-7be80.firebaseapp.com",
    databaseURL: "https://deneme2-7be80-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "deneme2-7be80",
    storageBucket: "deneme2-7be80.appspot.com",
    messagingSenderId: "493517742341",
    appId: "1:493517742341:web:c1acbdcf005f5dad1e176c"
};

const app = initializeApp(firebaseConfig); // firebase'i çalıştıran fonksiyon
const realDb = getDatabase(app); // veri tabanına verileri çek
const auth = getAuth(app) // kullanıcı işlemlerinde kullanılır
export { realDb, auth } // bu değişkenleri dışarıya çıkarır