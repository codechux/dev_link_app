"use client";
import Image from "next/image";
import Preview from "@/pages/Preview";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/config";

export default function SignUp() {
  const [user] = useAuthState(auth);

  const router = useRouter();

  if (!user) {
    router.push("/signup");
  }
  return <Preview />;
}
