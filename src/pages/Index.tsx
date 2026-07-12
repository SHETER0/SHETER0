
import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Coffee,
  Github,
  Globe,
  Smartphone,
  Lock,
  Box,
  Camera,
  CheckCircle2,
  Database,
  Laptop,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { useTranslation } from "@/hooks/use-translation";

// Simple scroll-reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function HomePage() {
  const { t, language } = useTranslation();
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Electron",
    "C#",
    "Unity",
    "SQLite",
    "Firebase",
    "Tailwind",
  ];
  // Mock user data (replace with actual data if available)
  const currentUser = {
    name: "Faisal",
    email: "faisal@example.com",
    phone: "+966 500 000 000"
  };
  const sheetURL = "https://script.google.com/macros/s/AKfycbyqtgGB2uoffIkY6aQ8q2JvzTp9oD8ABI8TCMnzYoiy-G6TfOt8uiGTXYGGDF9cnnhz/exec";
  const PROJECTS = [
    {
      id: "khabeer",
      title: "khabeer",
      category: "SaaS / Desktop",
      description: t('projectsData.reparo.description'),
      longDescription: t('projectsData.reparo.longDescription'),
      tech: ["React 18", "Electron", "SQLite", "Firebase", "Tailwind"],
      features: t('projectsData.reparo.features') as unknown as string[],
      links: {
        demo: "https://SHETER0.github.io/reparo-website/",
        github: null,
      },
      featured: true,
    },
    {
      id: "DevLocker",
      title: "DevLocker",
      category: "Web App",
      summary: t('projectsData.devlocker.summary'),
      problem: t('projectsData.devlocker.problem'),
      solution: t('projectsData.devlocker.solution'),
      highlights: t('projectsData.devlocker.highlights') as unknown as string[],
      details: {
        description: t('projectsData.devlocker.description'),
        howItWorks: t('projectsData.devlocker.howItWorks') as unknown as string[],
        benefits: t('projectsData.devlocker.benefits') as unknown as string[],
      },
      tech: ["React", "Vite", "Tailwind", "Electron"],
      icon: Box,
      links: {
        demo: "https://sheter0.github.io/DevLocker/",
        github: "https://github.com/SHETER0/DevLocker",
      },
    },
    {
      id: "Passwordy",
      title: "Passwordy",
      category: "Desktop App",
      summary: t('projectsData.passwordy.summary'),
      problem: t('projectsData.passwordy.problem'),
      solution: t('projectsData.passwordy.solution'),
      highlights: t('projectsData.passwordy.highlights') as unknown as string[],
      details: {
        description: t('projectsData.passwordy.description'),
        howItWorks: t('projectsData.passwordy.howItWorks') as unknown as string[],
        benefits: t('projectsData.passwordy.benefits') as unknown as string[],
      },
      tech: ["C#", ".NET", "AES-256"],
      icon: Lock,
      links: {
        demo: null,
        github: "https://github.com/SHETER0/Passwordy",
      },
    },
    {
      id: "EasyShot",
      title: "EasyShot",
      category: "Desktop Utility",
      summary: t('projectsData.easyshot.summary'),
      problem: t('projectsData.easyshot.problem'),
      solution: t('projectsData.easyshot.solution'),
      highlights: t('projectsData.easyshot.highlights') as unknown as string[],
      details: {
        description: t('projectsData.easyshot.description'),
        howItWorks: t('projectsData.easyshot.howItWorks') as unknown as string[],
        benefits: t('projectsData.easyshot.benefits') as unknown as string[],
      },
      tech: ["C#", ".NET", "Tesseract OCR"],
      icon: Camera,
      links: {
        demo: null,
        github: "https://github.com/SHETER0/EasyShot",
      },
    },
    {
      id: "Seukweeo",
      title: "Seukweeo",
      category: "Game Development",
      summary: t('projectsData.seukweeo.summary'),
      problem: t('projectsData.seukweeo.problem'),
      solution: t('projectsData.seukweeo.solution'),
      highlights: t('projectsData.seukweeo.highlights') as unknown as string[],
      details: {
        description: t('projectsData.seukweeo.description'),
        howItWorks: t('projectsData.seukweeo.howItWorks') as unknown as string[],
        benefits: t('projectsData.seukweeo.benefits') as unknown as string[],
      },
      tech: ["Unity", "C#"],
      icon: Gamepad2,
      links: {
        demo: "https://SHETER0.itch.io/seukweeo",
        github: null,
      },
    },
  ];

  const flagshipReveal = useReveal();
  const projectsReveal = useReveal();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">

        {/* ====== HERO SECTION ====== */}
        <section className="relative space-y-8 pt-8 overflow-hidden">
          {/* Floating particles background */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute top-20 left-[15%] w-1.5 h-1.5 rounded-full bg-primary/20" style={{ animation: 'float-slow 8s ease-in-out infinite' }} />
            <div className="absolute top-40 right-[20%] w-1 h-1 rounded-full bg-primary/15" style={{ animation: 'float-medium 6s ease-in-out infinite 1s' }} />
            <div className="absolute top-12 right-[35%] w-2 h-2 rounded-full bg-primary/10" style={{ animation: 'float-slow 10s ease-in-out infinite 2s' }} />
            <div className="absolute bottom-20 left-[40%] w-1.5 h-1.5 rounded-full bg-primary/15" style={{ animation: 'float-medium 7s ease-in-out infinite 0.5s' }} />
            <div className="absolute bottom-40 right-[10%] w-1 h-1 rounded-full bg-primary/20" style={{ animation: 'float-slow 9s ease-in-out infinite 3s' }} />
            <div className="absolute top-60 left-[8%] w-1 h-1 rounded-full bg-primary/10" style={{ animation: 'float-medium 8s ease-in-out infinite 1.5s' }} />
          </div>

          <div className="space-y-6">


            {/* Gradient animated heading */}
            <h1 className="animate-fade-in-up animate-delay-100 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text py-4 leading-normal">
              {t('hero.greeting')}
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up animate-delay-200 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {t('hero.description')}{" "}
              <span className="text-foreground font-semibold inline-flex items-center gap-1.5">
                {t('hero.codingSince')}
                <Sparkles className="h-5 w-5 text-primary inline" />
              </span>
            </p>
          </div>

          {/* Skill badges with staggered animation */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {skills.map((skill, i) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`animate-fade-in-up px-4 py-1.5 text-sm badge-glow border border-transparent hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all cursor-default`}
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* ====== FLAGSHIP SECTION ====== */}
        <section
          ref={flagshipReveal.ref}
          className={`space-y-5 transition-all duration-700 ${flagshipReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">{t('flagship.title')}</h2>
            <Badge className="bg-primary/15 text-primary border border-primary/30 hover:bg-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              {t('flagship.productionReady')}
            </Badge>
          </div>

          {/* Glassmorphism flagship card */}
          <div className="glass-card rounded-xl overflow-hidden gradient-border shadow-2xl shadow-primary/5">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                      <Laptop className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      {t('flagship.category')}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">khabeer</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('projectsData.reparo.longDescription')}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS[0].tech.map((techItem) => (
                      <Badge key={techItem} variant="secondary" className="px-3 py-1 badge-glow border border-transparent hover:border-primary/20">
                        {techItem}
                      </Badge>
                    ))}
                  </div>

                  {/* Feature checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {(PROJECTS[0].features as unknown as string[])?.map?.((feature: string) => (
                      <div key={feature} className="flex items-center gap-2.5 group">
                        <div className="p-0.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                      </div>
                    )) ?? PROJECTS[0].tech.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 group">
                        <div className="p-0.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://sheter0.github.io/reparo-website/",
                        "_blank"
                      )
                    }
                  >
                    <Globe className="mr-2 h-4 w-4" /> {t('flagship.viewWebsite')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" disabled className="border-border/50">
                    {t('flagship.proprietarySource')}
                  </Button>
                </div>
              </div>

              {/* App mockup */}
              <div className="bg-primary/[0.03] flex items-center justify-center p-8 md:p-10 border-t md:border-t-0 md:border-l border-border/30">
                <div className="w-full max-w-sm bg-card rounded-2xl shadow-2xl shadow-black/40 border border-border/40 p-5 space-y-4 rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground/70">
                      khabeer v1.0
                    </div>
                  </div>
                  {/* Mockup content */}
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <div className="h-16 w-full bg-primary/10 rounded-xl flex items-center justify-center border border-primary/10">
                        <Smartphone className="text-primary/70" />
                      </div>
                      <div className="h-16 w-full bg-muted/50 rounded-xl flex items-center justify-center border border-border/20">
                        <Database className="text-muted-foreground/50" />
                      </div>
                    </div>
                    <div className="h-24 w-full bg-muted/30 rounded-xl border border-border/20 flex items-center justify-center text-xs text-muted-foreground/50 font-mono">
                      Inventory List
                    </div>
                    {/* Extra row for depth */}
                    <div className="flex gap-3">
                      <div className="h-8 flex-1 bg-primary/5 rounded-lg border border-primary/10" />
                      <div className="h-8 flex-1 bg-muted/30 rounded-lg border border-border/10" />
                      <div className="h-8 flex-1 bg-muted/20 rounded-lg border border-border/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== PROJECTS SECTION ====== */}
        <section
          ref={projectsReveal.ref}
          className={`space-y-8 transition-all duration-700 ${projectsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{t('projects.title')}</h2>
            <p className="text-muted-foreground">{t('projects.moreDescription')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => {
              if (project.featured) return null;
              const Icon = project.icon;
              return (
                <Card
                  key={project.id}
                  className="flex flex-col card-hover-lift glass-card border-border/30 overflow-hidden gradient-border group"
                >
                  <CardHeader className="pb-3">
                    {/* Icon with gradient background */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-primary/70 font-medium text-xs uppercase tracking-wider">
                      {project.category}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1">
                    <p className="font-medium text-sm">{project.summary}</p>

                    {/* Problem/Solution block with visual separation */}
                    <div className="text-sm text-muted-foreground space-y-2 p-3 rounded-lg bg-muted/20 border border-border/20">
                      <p>
                        <strong className="text-foreground/80">{t('projects.problem')}</strong>{" "}
                        {project.problem}
                      </p>
                      <div className="w-full h-px bg-border/30" />
                      <p>
                        <strong className="text-foreground/80">{t('projects.solution')}</strong>{" "}
                        {project.solution}
                      </p>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Details accordion */}
                    <details className="text-sm group/details">
                      <summary className="cursor-pointer font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        {t('projects.viewDetails')}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-open/details:rotate-90" />
                      </summary>

                      <div className="mt-3 space-y-3 text-muted-foreground">
                        <p>{project.details.description}</p>

                        <div>
                          <p className="font-semibold text-foreground">
                            {t('projects.howItWorks')}
                          </p>
                          <ul className="list-disc ml-5 mt-1 space-y-0.5">
                            {project.details.howItWorks.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="font-semibold text-foreground">
                            {t('projects.benefits')}
                          </p>
                          <ul className="list-disc ml-5 mt-1 space-y-0.5">
                            {project.details.benefits.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs badge-glow border border-transparent hover:border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2 pt-4 border-t border-border/20">
                    {project.links.demo && (
                      <Button
                        className="flex-1 bg-primary hover:bg-primary/90 shadow-sm shadow-primary/10 hover:shadow-primary/20 transition-all"
                        onClick={() =>
                          window.open(project.links.demo!, "_blank")
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('projects.visit')}
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        variant="outline"
                        className="flex-1 border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all"
                        onClick={() =>
                          window.open(project.links.github!, "_blank")
                        }
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t('projects.code')}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}

            {/* More Coming Soon card */}
            <Card className="flex flex-col items-center justify-center border-dashed border-border/30 glass-card card-hover-lift group">
              <CardContent className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors duration-300">
                  <Coffee className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold">{t('projects.moreComing')}</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">
                  {t('projects.moreDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
