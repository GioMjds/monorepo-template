import { use } from "react";
import { message } from "shared/gateways/Message";

export default function Home() {
  const data = use(message.msg());
  
  return (
    <h1 className="text-2xl">Hello Next.js from admin! {data.message}</h1>
  )
}