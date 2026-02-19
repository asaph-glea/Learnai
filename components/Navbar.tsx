import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/" className="hover:opacity-80 transition-opacity">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                        className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <span className="text-xl font-bold tracking-tight hidden sm:block">Converso</span>
                </div>
            </Link>
            <div className="flex items-center gap-4 md:gap-8">
                <div className="hidden md:block">
                    <NavItems />
                </div>

                <div className="flex items-center gap-3">
                    <SignedOut>
                        <SignInButton>
                            <button className="btn-signin">
                                <span>Sign In</span>
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 border-2 border-border"
                                }
                            }}
                        />
                    </SignedIn>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
