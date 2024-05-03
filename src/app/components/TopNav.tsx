import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

export const TopNav = () => {
  return (
    <div>
      {" "}
      <nav className="flex w-full items-center justify-between  border   p-4 text-xl font-semibold shadow-md ">
        <div className="">Gallery</div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};
