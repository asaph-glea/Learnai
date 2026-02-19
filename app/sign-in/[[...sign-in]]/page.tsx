import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cta-gold/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none text-red-500" />

            <div className="relative z-10 w-full max-w-[500px]">
                <SignIn
                    appearance={{
                        elements: {
                            rootBox: "w-full",
                            card: "rounded-3xl shadow-2xl border border-white/10 bg-card/50 backdrop-blur-xl",
                            headerTitle: "text-2xl font-bold text-foreground",
                            headerSubtitle: "text-muted-foreground",
                            formButtonPrimary: "bg-cta-gold hover:bg-amber-400 text-black font-bold",
                            formFieldInput: "bg-background/50 border-input",
                            footerActionLink: "text-cta-gold hover:text-amber-400"
                        }
                    }}
                />
            </div>
        </main>
    )
}