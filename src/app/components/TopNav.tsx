"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import React from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { SimpleUploadButton } from "../_components/SimpleUPloadButton";
import { abort } from "process";

export const TopNav = () => {
  return (
    <div>
      {" "}
      <nav className="fixed flex w-full items-center justify-between border  bg-white   p-4 text-xl font-semibold shadow-md ">
        <Link href="/">
          {" "}
          <div className="">Gallery</div>
        </Link>
        <div className="flex flex-row">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
