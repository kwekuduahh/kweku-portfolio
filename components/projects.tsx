"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Link } from "lucide-react"
import { useNavigate } from "react-router"

interface PortfolioStep {
    title: string
    description: string
    image: string
    imageAlt?: string
    projectLink?: string
}

interface SimpleIntroDisclosureProps {
    steps: PortfolioStep[]
    className?: string
}

export function Projects({ steps, className }: SimpleIntroDisclosureProps) {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [projectLink, setProjectLink] = React.useState<string>();
    return (
        <div className={cn("w-full max-w-6xl mx-auto", className)}>
            <div className="flex flex-col-reverse gap-8 md:flex-row">
                <div className="w-full space-y-2 md:w-1/3">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentStep(index);
                                setProjectLink(step.projectLink)
                            }
                            }
                            className={cn(
                                "w-full text-left p-4 rounded-lg transition-all duration-200 border",
                                currentStep === index
                                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                                    : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground",
                            )}
                        >
                            <div className="text-sm font-medium">{step.title}</div>
                            <div className="mt-1 text-xs opacity-80 line-clamp-2">{step.description.substring(0, 60)}...</div>
                        </button>
                    ))}
                </div>

                <div className="flex-1">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.77 }}
                        className="w-full space-y-6"
                    >
                        {steps[currentStep].image && (
                            <div className="relative w-full overflow-hidden rounded-lg h-100 bg-muted">
                                <Image
                                    src={steps[currentStep].image || "/placeholder.svg"}
                                    alt={steps[currentStep].imageAlt || ""}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full px-4 pt-6 pb-3 space-y-1 bg-gradient-to-t from-secondary to-secondary/0">
                                    <div className="flex gap-x-1 items-start md:items-center px-0.5">
                                        <h3 className="text-3xl font-bold text-primary">{steps[currentStep]?.title}</h3>
                                        <Link className="w-5 h-5 transition-all duration-300 cursor-pointer hover:opacity-35" to={projectLink} />
                                    </div>
                                    <p className="leading-relaxed text-foreground text-md">{steps[currentStep]?.description}</p>
                                </div>
                            </div>
                        )}

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects
