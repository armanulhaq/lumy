import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
    return (
        <section className="relative flex items-center overflow-hidden pt-20">
            {/* GRADIENT ORBS */}
            {/* Top-left glow to frame heading */}
            <div className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-gradient-to-br from-purple-400/15 via-purple-500/10 to-transparent rounded-full blur-3xl" />

            {/* Bottom-left subtle support glow */}
            <div className="absolute bottom-0 left-1/4 w-[20rem] h-[20rem] bg-gradient-to-tl from-purple-400/15 via-violet-500/10 to-transparent rounded-full blur-3xl" />

            {/* Top-right behind hero image */}
            <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />

            {/* Bottom-right anchor glow */}
            <div className="absolute bottom-[-6rem] right-1/3 w-[36rem] h-[36rem] bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 w-full px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT CONTENT */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                {/* BADGE */}
                                <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-primary">
                                        AI-Powered Dental Assistant
                                    </span>
                                </div>

                                {/* MAIN HEADING */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                                    <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                                        Your dental
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        questions
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                                        answered instantly
                                    </span>
                                </h1>

                                {/* SUBTITLE */}
                                <p className="text-md text-muted-foreground leading-relaxed max-w-xl font-medium">
                                    Chat with our AI dental assistant for
                                    instant advice, book smart appointments, and
                                    get personalized care recommendations.
                                    Available 24/7.
                                </p>
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <SignUpButton mode="modal">
                                    <Button size={"lg"}>
                                        <MicIcon className="mr-2 size-5" />
                                        Try voice agent
                                    </Button>
                                </SignUpButton>

                                <SignUpButton mode="modal">
                                    <Button size={"lg"} variant={"outline"}>
                                        <CalendarIcon className="mr-2 size-5" />
                                        Book appointment
                                    </Button>
                                </SignUpButton>
                            </div>

                            {/* USER TESTIMONIALS */}

                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                                        alt="Jessica Davis"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                                        alt="Sam Miller"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                                        alt="Anna Lopez"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                                        alt="Mike Rodriguez"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                                        alt="Katie Lee"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full object-cover ring-4 ring-background"
                                    />
                                </div>

                                {/* RATING AND STATS */}
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <StarIcon
                                                    key={star}
                                                    className="h-4 w-4 fill-amber-400 text-amber-400"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-foreground">
                                            4.9/5
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Trusted by{" "}
                                        <span className="font-semibold text-foreground">
                                            1,200+ patients
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT - HERO IMAGE */}

                        <div className="relative lg:pl-8">
                            {/* GRADIENT ORBS */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

                            <Image
                                src={"/hero.png"}
                                alt="DentWise AI"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
