import Head from "next/head";
import { useState } from 'react';
import styles from "../styles/Home.module.css";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


function Login() {
  const router = useRouter();

  const [signInWithEmailAndPassword, userCredential, loading, error] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const onSubmit = async () => {
    const result = await signInWithEmailAndPassword(email, password);
    
    if (!result) {
      alert("Login failed, try again.");
    } 
    else {
      router.push("/"); // Redirect to login page after successful signup
    }
}


  return (
    <div className={styles.container}>
      <Head>
        <title>Login Now!</title>
      </Head>
      
      <div className="relative h-[800px] overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/login_bg_resized.png')" }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content on top of background */}
      <div className="relative z-10 grid grid-cols-3 h-full">
        {/* Left side content on top of background */}
        <div className="col-span-2 text-white p-10 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-4">
            <img src="/judokaslogo.jpg" className="h-16 w-16" alt="JudokasConnect logo" />
            <h1 className="text-2xl font-bold">JudokasConnect</h1>
          </div>
          <div className="mb-4">
            <h3 className="text-lg">Connecting The <br /> Future...</h3>
          </div>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right side: overlapping white panel */}
        <div className="bg-white h-100 p-10 flex flex-col justify-center shadow-xl mx-12 mt-50 rounded-lg z-20">
          <div className="mb-2">
            <p className="text-sm text-gray-700">Welcome Back!</p>
            <h1 className="text-xl font-semibold">Log in to your Account</h1>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center w-full">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="johndoe@gmail.com"
                className="border border-gray-500 rounded-md p-2 mt-5 w-80"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="**********"
                className="border border-gray-500 rounded-md p-2 mt-5 w-80"
              />

              <button
                onClick={onSubmit}
                className="bg-black text-white rounded-md p-2 mt-5 w-80"
              >
                Login
              </button>
            </div>
          </div>

          <div className="mt-4 text-center">
            New User?{" "}
            <a href="/signup" className="text-black underline">Sign up here</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
