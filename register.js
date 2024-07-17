
import { auth,createUserWithEmailAndPassword } from "./firebase.js"

 const register = ()=>{
 const email = document.getElementById("lemail")
 const password = document.getElementById("lpassword")
 console.log(email.value , password.value)
 createUserWithEmailAndPassword(auth, email.value, password.value)
 .then((userCredential) => {
   // Signed up 
   const user = userCredential.user;
   console.log("user-->", user)
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log("error-->", errorMessage)
   // ..
 });
}

const getBtn = document.getElementById("registerBtn")
getBtn.addEventListener("click",register)
