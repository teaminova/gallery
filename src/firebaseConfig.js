// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbiN-QTTOjz1_kh63qnskN6qgtdkJ_5xo",
    authDomain: "art-gallery-14576.firebaseapp.com",
    databaseURL: "https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "art-gallery-14576",
    storageBucket: "art-gallery-14576.appspot.com",
    messagingSenderId: "1079663819478",
    appId: "1:1079663819478:web:82f425779c25d22c97e777",
    measurementId: "G-S80DMJBB7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create a storage reference from our storage service
// const storageRef = ref(storage);

export async function addImage(imageFile) {
    const imageName = imageFile.name;
    const newImageRef = ref(storage, imageName);

    try {
        await uploadBytes(newImageRef, imageFile).then((snapshot) => {
            console.log('Uploaded a file!' + snapshot);
        });
    } catch (e) {
        console.error("Error adding image file!");
    }



    return getDownloadURL(ref(storage, imageName)).then((url) => {
        return url
    }).catch ((e) => {
        console.error("Error getting download image url!" + e);
    });
}

export async function deleteImage(fileName) {
    const imageRef = ref(storage, fileName);

    console.log(fileName);

    try {
        await deleteObject(imageRef).then(() => {
            console.log('Image file successfully deleted!');
        });
    } catch(e) {
        console.error('Error deleting image file!')
    }
}

export async function adminSignIn(email, password) {
    let adminIsSignedIn = false;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user + userCredential);
            adminIsSignedIn = true;
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    return adminIsSignedIn;
}
