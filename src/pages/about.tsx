import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Laptop,
  Gamepad2,
  Rocket,
  Coffee,
  MapPin,
  Calendar,
  Mail,
  Github,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";

const Avatar = () => {
  const skills = [
    "JS",
    "TS",
    "React",
    "Vite",
    "SQL",
    "NET",
    "C#",
    "Unity",
    "Git",
    "NPM",
    "API",
    "UX",
    "UI",
    "KSA",
    "FA",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="w-full h-[400px] flex items-center justify-center p-4">
      <motion.div
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className="relative w-full max-w-md h-full rounded-3xl bg-[#020617] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden font-mono text-[10px] text-primary/40 flex flex-wrap gap-4 p-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: [0, 1, 0], y: [0, 120] }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {
                ["ت", "ق", "ن", "ي", "0", "1", "{ }", "FA"][
                Math.floor(Math.random() * 8)
                ]
              }
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-72 h-72 bg-primary/30 rounded-full blur-[80px]"
        />

        <motion.div
          animate={{ y: ["-100%", "400%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent z-10"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-52 h-52 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]"
          >
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--background))" />
                <stop offset="100%" stopColor="hsl(var(--muted))" />
              </linearGradient>
            </defs>
            <path
              d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
              fill="url(#hexGrad)"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="1"
            />
          </svg>

          <div className="relative flex flex-col items-center z-30">
            <div className="h-16 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={skills[index]}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="text-5xl font-black text-foreground tracking-tighter text-center"
                >
                  {skills[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
              <motion.div
                animate={{ width: [10, 50, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-[2px] bg-primary rounded-full"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 z-30">
          <div className="px-5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">
              Saudi Engineer
            </span>
          </div>
          <span className="text-[9px] text-primary/50 font-mono tracking-widest uppercase">
            Location: Mecca // KSA
          </span>
        </div>
      </motion.div>
    </div>
  );
};

import { MainLayout } from "@/components/layout/main-layout";
const AboutPage = () => {
  const { t } = useTranslation();
  const skillCategories = [
    {
      title: t('about.categories.frontend'),
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Electron"],
    },
    {
      title: t('about.categories.backend'),
      icon: Code2,
      skills: ["Firebase", "SQLite", "Express.js", ".NET"],
    },
    {
      title: t('about.categories.gameDev'),
      icon: Gamepad2,
      skills: ["Unity", "C#", "2D/3D Game Design", "Physics Systems"],
    },
    {
      title: t('about.categories.tools'),
      icon: Laptop,
      skills: ["Git", "NPM Publishing", "Desktop Apps", "API Integration"],
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: t('about.timeline.y2019.title'),
      description: t('about.timeline.y2019.desc'),
    },
    {
      year: "2020-2021",
      title: t('about.timeline.y2020.title'),
      description: t('about.timeline.y2020.desc'),
    },
    {
      year: "2022-2023",
      title: t('about.timeline.y2022.title'),
      description: t('about.timeline.y2022.desc'),
    },
    {
      year: "2023-2024",
      title: t('about.timeline.y2023.title'),
      description: t('about.timeline.y2023.desc'),
    },
    {
      year: "2024-Present",
      title: t('about.timeline.y2024.title'),
      description: t('about.timeline.y2024.desc'),
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="space-y-6 mb-28">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-5xl font-bold tracking-tight pb-5">{t('about.title')}</h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{t('about.codingSince')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  <span>{t('about.role')}</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro')}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.philosophy')}
              </p>

              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  onClick={() =>
                    window.open("https://github.com/SHETER0", "_blank")
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t('about.github')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open("mailto:fisal8260@outlook.sa", "_blank")
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t('about.getInTouch')}
                </Button>
              </div>
            </div>

            {/* Avatar */}
            <div className="w-full h-72">
              <Avatar />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">{t('about.skillsTitle')}</h2>
            <Rocket className="h-7 w-7 text-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">{t('about.timelineTitle')}</h2>
          <div className="space-y-8 relative before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-border">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-10 space-y-2">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="flex items-baseline gap-3">
                  <Badge variant="outline" className="font-mono text-sm">
                    {item.year}
                  </Badge>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">{t('about.philosophyTitle')}</h2>
          <Card className="bg-secondary/20 shadow-lg">
            <CardContent className="pt-8 space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  {t('about.values.quality.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.values.quality.desc')}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  {t('about.values.user.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.values.user.desc')}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  {t('about.values.learning.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.values.learning.desc')}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 pt-8">
          <h2 className="text-3xl font-bold">{t('about.ctaTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.ctaDescription')}
          </p>
          <div className="flex gap-3 justify-center pt-4">
            <Button
              size="lg"
              onClick={() =>
                window.open("mailto:fisal8260@outlook.sa", "_blank")
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('about.contactMe')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open("https://github.com/SHETER0", "_blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              {t('about.viewProjects')}
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
export default AboutPage;
