import {auth,signInWithEmailAndPassword} from "./firebase.js"


const signin = ()=>{
    const email = document.getElementById("lemail")
    const password = document.getElementById("lpassword")
    console.log(email.value , password.value)
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("user-->", user)
      window.location = "profile.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error-->", errorMessage)
      // ..
    });
   }
   
   const getBtn = document.getElementById("signinBtn")
   getBtn.addEventListener("click",signin)
   