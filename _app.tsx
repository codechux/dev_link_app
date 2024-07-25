"use client";
import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState, ReactNode } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { auth } from "./src/app/firebase/config";
import { AuthProvider } from "./src/context/AuthContext";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider value={{ currentUser }}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
