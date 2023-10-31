import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
});


function App() {
  const [user, setUser] = React.useState(null);

  const handleSignIn = async () => {
    const userCredential = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    setUser(userCredential.user);
  };

  return (
    <>
      <div>
        <h1>My Posts</h1>
        {user ? <Posts /> : <button onClick={handleSignIn}>Sign in</button>}
      </div>
    </>
  );
}

export default App
