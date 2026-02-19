import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full py-8 bg-background border-t border-border">
            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cta-gold flex items-center justify-center font-bold text-black text-lg">
                        L
                    </div>
                    <span className="font-bold text-xl tracking-tight">Converso</span>
                    <span className="text-sm text-muted-foreground ml-4">© 2026 Learnai. All rights reserved.</span>
                </div>
                <div className="flex gap-6 sm:gap-8">
                    <Link className="text-sm font-medium text-muted-foreground hover:text-cta-gold transition-colors hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-sm font-medium text-muted-foreground hover:text-cta-gold transition-colors hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
};
