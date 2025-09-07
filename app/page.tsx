"use client"

import { Projects } from "@/components/projects"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true)
  const [activeSection, setActiveSection] = useState<string>("")
  const sectionsRef = useRef<(HTMLElement)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const projectSteps = [
    {
      title: "FlyRadar",
      description: "Explore my work and discover the projects I've built with passion and creativity.",
      image: "/placeholder.svg?height=300&width=500&text=Portfolio+Welcome",
      imageAlt: "Portfolio welcome screen",
      devMode: true,
      projectLink: ""
    },
    {
      title: "Audiophile Ecommerce",
      description: "Take a look at some of my best work, including web applications, mobile apps, and design systems.",
      image: "/placeholder.svg?height=300&width=500&text=Featured+Projects",
      imageAlt: "Featured projects showcase",
      devMode: false,
      projectLink: "https://audiophilecommerceplatform.netlify.app/"
    },
    {
      title: "Slurppies",
      description: "Learn about my technical expertise and the technologies I work with to bring ideas to life.",
      image: "/placeholder.svg?height=300&width=500&text=Skills+Overview",
      imageAlt: "Skills and experience overview",
      devMode: false,
      projectLink: "https://www.slurppies.com"
    },
    {
      title: "Vasanasa",
      description: "Ready to collaborate? Let's connect and discuss how we can work together on your next project.",
      image: "/placeholder.svg?height=300&width=500&text=Contact+Me",
      imageAlt: "Contact information",
      devMode: true,
      projectLink: ""
    },
  ]


  return (
    <div className={`min-h-screen bg-background text-foreground relative ${activeSection === "intro" ? '' : ''}`}>
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "projects", "work", "connect"].map((section) => (
            <div key={section} className="flex items-center gap-x-1">
              <button
                key={section}
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                aria-label={`Navigate to ${section}`}
              />
              <span className={`${activeSection === section ? "text-foreground font-bold uppercase text-xs" : "hidden"}`}>{section}</span>
            </div>
          ))}
        </div>
      </nav>

      <main className={`max-w-6xl mx-auto`}>
        <header
          id="intro"
          ref={(el) => {
            if (el) sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0 border-r border-l border-b border-accent-foreground-muted px-6 sm:px-8 lg:px-16"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                <div className="text-sm text-muted-foreground font-[PT_Mono] tracking-wider">PORTFOLIO / 2025</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  Available for work
                </div>
                <div>Accra, Ghana</div>
              </div>
              <div className="space-y-3 sm:space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-primary">
                  Kweku
                  <br />
                  <span className="text-muted-foreground">Duah</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-lg">
                <p className="text-lg sm:text-lg text-muted-foreground leading-relaxed">
                  Frontend Developer who loves bringing complex ideas to life through clean, modular code and intuitive design.
                  I specialize in <span className="text-foreground">React</span>, <span className="text-foreground">TypeScript</span>, and <span className="text-foreground">modern UI frameworks</span>, blending my UX background with frontend engineering to craft interfaces that don’t just work—they engage, guide, and inspire.
                </p>

              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-[PT_Mono] uppercase">Currently</div>
                <div className="space-y-2">
                  <div className="text-foreground">Developer & Quality Assurance</div>
                  <div className="text-muted-foreground">@ Infoview Data Solutions</div>
                  <div className="text-sm text-muted-foreground">2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-[PT_Mono] uppercase">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Keycloak", "TypeScript", "BetterAuth", "Figma", "Shadcn", "Redux Toolkit", "Axios", "NextJS", "Tanstack Query", "React Router"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="projects"
          ref={(el) => {
            if (el) (sectionsRef.current[1] = el)
          }
          }
          className="min-h-screen py-20 sm:py-32 opacity-0 px-6 sm:px-8 lg:px-16 border-r border-l border-b border-accent-foreground-muted"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Selected Projects</h2>

            <section className="w-full">
              <Projects steps={projectSteps} />
            </section>

          </div>
        </section>

        <section
          id="work"
          ref={(el) => {
            if (el) (sectionsRef.current[2] = el)
          }
          }
          className="min-h-screen py-20 sm:py-32 opacity-0 border-r border-l border-accent-foreground-muted px-6 sm:px-8 lg:px-16"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Work Experience</h2>
              <div className="text-sm text-muted-foreground font-[PT_Mono]">2021 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2023",
                  role: "Frontend Developer",
                  company: "Piver Technologies",
                  tasks: [
                    "API integration across multiple multiple multi-tenant web solutions",
                    "Leveraged on modern component libraries to build responsive interfaces quickly."
                  ],
                  tech: ["React", "Keycloak", "GitBooks", "TypeScript", "Tanstack Query", "Buf Schema Registry"],
                },
                {
                  year: "2022",
                  role: "Creative Developer",
                  company: "Feenix Ghana",
                  tasks: [
                    "Mobile first approach to the redesign and development of company website",
                    "Preparation and organisation of api documentation for internal fleet management platform."
                  ],
                  tech: ["React", "HTML", "CSS", "Php", "JS", "Docusarus", "Figma"],
                },
                {
                  year: "2021",
                  role: "User Interface Designer",
                  company: "AMS Digital Services",
                  tasks: [
                    "Improved website performance using Google Page Insights to identify key areas of concern and optimized websites",
                    "Collaborated with clients to identify operational challenges and translate them into effective digital solutions."
                  ],
                  tech: ["Google Page Insights", "WordPress", "Figma", "Arkesel"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    {job["tasks"].map((task, index) => (
                      <ul key={index}>
                        <li className=" list-disc text-sm text-muted-foreground">{task}</li>
                      </ul>
                    ))}
                  </div>

                  <div className="lg:col-span-4 flex flex-row gap-x-1 lg:justify-end mt-2 lg:mt-0 flex-wrap items-start">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground text-nowrap rounded-full border h-fit group-hover:border-muted-foreground/80 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section id="connect" ref={(el) => {
          if (el) (sectionsRef.current[3] = el)
        }
        } className="py-20 sm:py-32 opacity-0 border-r border-l border-accent-foreground-muted px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-md sm:text-md text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:asamoahduah101@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">asamoahduah101@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@Kwekuduahh", url: "https://github.com/kwekuduahh" },
                  { name: "LinkedIn", handle: "Kweku", url: "https://www.linkedin.com/in/kweku-asamoah-8383ab1a9/" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border border-r border-l border-accent-foreground-muted px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Credits to <span className="text-foreground font-[PT_Mono]">Samtoya.</span></div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
