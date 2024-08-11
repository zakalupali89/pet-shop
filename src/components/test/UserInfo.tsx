"use client"

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const {data} = useSession();

  return (
    <>
      <div>
      <img alt="user" src={data?.user?.image || ""}/>
    </div>
      <div>{data?.user?.name}</div>
    </>
  );
}
