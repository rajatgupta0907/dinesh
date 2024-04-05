"use server";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
export default async function Home() {
  // const router = useRouter();
  // router.push("https://www.google.com");
  redirect('https://manychat.com/');


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
