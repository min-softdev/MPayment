"use client";
import { auth } from "@hooks";

export default function Home() {
  const data = auth.useAuth();

  console.log("data :>> ", data);
  return <div></div>;
}
