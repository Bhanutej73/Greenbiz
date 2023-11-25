// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAplYmpUJngjm9y0MefVSCBNIvHIa-UjE",
    authDomain: "auth-form-d5386.firebaseapp.com",
    projectId: "auth-form-d5386",
    storageBucket: "auth-form-d5386.appspot.com",
    messagingSenderId: "769299731205",
    appId: "1:769299731205:web:040f73f05daa9c0bb25d6c"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed up successfully
            window.alert("You've signed up successfully");
            console.log(result);
            window.location.assign('User_signIn.html');
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
};



// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.alert("You've signed in successfully");
            console.log(result);
            window.location.assign('User_home.html');
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // Check if the error is due to incorrect credentials
            if (
                
                error.code ==="auth/invalid-login-credentials"
            ) {
                window.alert("Incorrect user-name or password!");
            }
        });
}
