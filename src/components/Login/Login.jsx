import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../FireBase/Firebase.init";
import { useState } from "react";
const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-center flex flex-col justify-center items-center mx-auto gap-5">
      {user ? (
        <button onClick={handleSignOut} className="btn btn-ghost">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn btn-primary">
          Google Login
        </button>
      )}
      {user && (
        <div>
          <h2>User:{user?.displayName}</h2>
          <h1>Email:{user?.email}</h1>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
