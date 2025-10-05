import { Clock, Copy, Zap, ThumbsUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ProfileCard() {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);
    const [now, setNow] = useState<string>(new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric',
    }));

    useEffect(() => {
        setIsClient(true);
        setNow(new Date().toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric',
        }));

    }, []);

    const { theme } = useTheme();

    function handleCopyEmail() {
        navigator.clipboard.writeText('asamoahduah101@gmail.com');
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }

    return (
        <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="m-0 rotate-6 rounded-[32px] w-[275px] md:w-[400px] p-[1px]"
        >
            <div className="flex flex-col items-center gap-4">
                {/* Main profile card */}
                <div className="w-full rounded-[32px] overflow-hidden">
                    {/* Dark section */}
                    <div className="bg-accent-foreground-muted backdrop-blur-lg p-6 rounded-t-[32px]">
                        {/* Header with status and time */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-400">Available for work</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">{isClient ? now : 'Loading...'}</span>
                            </div>
                        </div>

                        {/* Profile section */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex-shrink-0 w-16 h-16 overflow-hidden bg-orange-100 rounded-full">
                                <Image
                                    src="/profile.jpg"
                                    alt="Kweku Duah"
                                    width={64}
                                    height={64}
                                    className="object-cover object-bottom w-full h-full"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold text-primary">Kweku Duah</h1>
                                <p className="text-base text-gray-400">Frontend Developer</p>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col gap-3 md:flex-row">
                            <Button
                                className="flex-1 h-12 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/60 rounded-2xl cursor-pointer"
                                variant="default"
                                onClick={() => {
                                    window.open('https://wa.me/233233674409?text=Hey%20Kweku,%20You%20are%20hired%20', '_blank');
                                }}
                            >
                                <ThumbsUp className="w-5 h-5 mr-1" />
                                Hire Me
                            </Button>
                            <Button
                                className="flex-1 h-12 text-base font-medium  text-primary rounded-2xl cursor-pointer"
                                variant="outline"
                                onClick={handleCopyEmail}
                            >
                                {isCopied ? <Check className="w-5 h-5 mr-1 text-green-500" /> : <Copy className="w-5 h-5 mr-1" />}
                                {isCopied ? 'Copied' : 'Copy Email'}
                            </Button>
                        </div>
                    </div>

                    <div className="bg-chart-5/70 rounded-b-[32px] p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <Zap className="w-5 h-5 text-gray-900" />
                            <span className="text-base font-medium text-gray-900">Currently High on Creativity</span>
                        </div>
                    </div>
                </div>
            </div>
        </MagicCard >
    )
}
