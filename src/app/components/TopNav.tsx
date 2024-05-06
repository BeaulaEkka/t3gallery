"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const TopNav = () => {
  const router = useRouter();

  return (
    <div>
      {" "}
      <nav className="flex w-full items-center justify-between  border   p-4 text-xl font-semibold shadow-md ">
        <Link href="/">
          {" "}
          <div className="">Gallery</div>
        </Link>
        <div className="flex flex-row">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
