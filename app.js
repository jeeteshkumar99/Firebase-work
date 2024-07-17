import{auth,onAuthStateChanged , signOut ,sendEmailVerification} from "./firebase.js"

let name = document.getElementById("name")
let email = document.getElementById("email")



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    console.log("Email sent")
    // ...
  });

      console.log("user -->", user)
      name.innerHTML = user.email.slice(0,user.email.indexOf("@"))
      email.innerHTML = user.email
      // ...
    } else {
      // User is signed out
      // ...
        console.log("not sign in ")
    }
  });


  let logout = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Logout successfully")
        window.location = "index.html"
      }).catch((error) => {
        // An error happened.

        console.log(error)
      });
      
  }
  
  let LogoutBtn = document.getElementById("logoutBtn")
  
  LogoutBtn && LogoutBtn.addEventListener("click",logout)

  
  