import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
export default function Home() {
    return (
        <>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
        </>
    );
}
