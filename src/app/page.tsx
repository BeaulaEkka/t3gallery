import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full">please Sign In</div>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
