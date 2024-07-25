"use client";
import Image from "next/image";
import ProfileDetails from "@/pages/Profile";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignUp() {
  const { currentUser } = useAuth();

  const router = useRouter();

  if (!currentUser) {
    router.push("/signup");
  }
  return <ProfileDetails />;
}
