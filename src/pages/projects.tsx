import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
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
  Globe,
  Laptop,
  Database,
  CheckCircle2,
  Github,
  Smartphone,
  Lock,
  Box,
  Crosshair,
  Camera,
  Type,
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// --- Project Data ---
const PROJECTS = [
  // --- Flagship ---
  {
    id: "khabeer",
    title: "khabeer",
    category: "SaaS / Desktop",
    description:
      "A professional-grade Shop Management System engineered for mobile phone repair experts.",
    longDescription:
      "khabeer moves repair shops away from messy paper notebooks into a digital environment. It combines POS, Repair Tracking, and Inventory Management into one offline-first application.",
    tech: ["React 18", "Electron", "SQLite", "Firebase", "Tailwind"],
    features: [
      "Offline-First (Works without Wi-Fi)",
      "WhatsApp Automated Messages",
      "Inventory & Part Tracking",
      "Smart Ticketing System",
    ],
    links: {
      demo: "https://SHETER0.github.io/reparo-website/",
      github: null,
    },
    featured: true,
  },
  // --- Apps ---
  {
    id: "DevLocker",
    title: "DevLocker",
    category: "Web App",
    description:
      "A developer-focused code snippet and project organizer to keep your local workflow clean.",
    tech: ["React", "Electron", "TypeScript"],
    icon: Box,
    links: {
      demo: "https://sheter0.github.io/DevLocker/",
      github: "https://github.com/SHETER0/DevLocker",
    },
  },
  {
    id: "passwordy",
    title: "Passwordy",
    category: "Desktop App",
    description:
      "A secure, offline password manager built to store credentials safely on your local machine.",
    tech: ["C#", ".NET", "Encryption"],
    icon: Lock,
    links: { demo: null, github: "https://github.com/SHETER0/Passwordy" },
  },
  {
    id: "easyshot",
    title: "EasyShot",
    category: "Desktop App",
    description:
      "offline password manager app that helps you keep your accounts safe and secure.",
    tech: [".NET", "C#"],
    icon: Camera,
    links: { demo: null, github: "https://github.com/SHETER0/EasyShot" },
  },
  // --- Game Dev / Unity ---
  {
    id: "seukweeo",
    title: "Seukweeo",
    category: "Game Dev",
    description:
      "A complete 2D platformer game developed in one week. Features custom physics and level design.",
    tech: ["Unity", "C#"],
    icon: Gamepad2,
    links: { demo: "https://SHETER0.itch.io/seukweeo", github: null },
  },
  {
    id: "procedural-ads",
    title: "Procedural ADS",
    category: "Unity Tool",
    description:
      "A mathematical approach to Aim Down Sights (ADS) in FPS games for smoother weapon handling.",
    tech: ["Unity", "C#", "3D Math"],
    icon: Crosshair,
    links: { demo: null, github: "https://github.com/SHETER0/Procedural-ADS" },
  },
  {
    id: "recoil-system",
    title: "Simple Recoil System",
    category: "Unity Tool",
    description:
      "A lightweight, customizable recoil pattern system for Unity shooters.",
    tech: ["Unity", "C#"],
    icon: Crosshair,
    links: {
      demo: null,
      github: "https://github.com/SHETER0/Simple-Unity-Recoil-System",
    },
  },

  // --- Libraries ---
  {
    id: "text-loop",
    title: "React Animated Text",
    category: "Library",
    description:
      "A React component for smooth text looping animations, published for the community.",
    tech: ["React", "NPM", "CSS"],
    icon: Type,
    links: {
      demo: null,
      github: "https://github.com/SHETER0/react-animated-text-loop",
    },
  },
];

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (p.featured) return false;
    if (filter === "All") return true;
    if (filter === "Apps")
      return ["Desktop App", "SaaS / Desktop", "Web App"].includes(p.category);
    if (filter === "Game Dev")
      return ["Game Dev", "Unity Tool"].includes(p.category);
    if (filter === "Libraries") return p.category === "Library";
    return true;
  });

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight pb-5">{t('projects.pageTitle')}</h1>
            <p className="text-lg text-muted-foreground">
              {t('projects.pageDescription')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
            {["All", "Apps", "Game Dev", "Libraries"].map((f) => {
              const filterKey = f === "Game Dev" ? "gameDev" : f.toLowerCase();
              return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                  filter === f
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                  {t(`projects.filters.${filterKey}`)}
              </button>
              )
            })}
          </div>
        </div>

        {/* Featured Project */}
        {(filter === "All" || filter === "Apps") && (
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">{t('flagship.title')}</h2>
              <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('flagship.productionReady')}
              </Badge>
            </div>

            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Laptop className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-wider">
                        {t('flagship.category')}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold">khabeer</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t('projectsData.reparo.longDescription')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PROJECTS[0].tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {(t('projectsData.reparo.features') as unknown as string[]).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="lg"
                      className="flex-1 hover:scale-105 transition-transform"
                      onClick={() =>
                        window.open(
                          "https://sheter0.github.io/reparo-website/",
                          "_blank"
                        )
                      }
                    >
                      <Globe className="mr-2 h-4 w-4" /> {t('flagship.viewWebsite')}
                    </Button>
                    <Button size="lg" variant="outline" disabled>
                      {t('flagship.proprietarySource')}
                    </Button>
                  </div>
                </div>

                {/* Visual */}
                <div className="bg-primary/5 flex items-center justify-center p-8 border-t md:border-t-0 md:border-l">
                  <div className="w-full max-w-sm bg-background rounded-xl shadow-2xl border p-4 space-y-4 rotate-1">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">
                        khabeer v1.0
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <div className="h-16 w-full bg-primary/10 rounded-lg flex items-center justify-center">
                          <Smartphone className="text-primary" />
                        </div>
                        <div className="h-16 w-full bg-muted rounded-lg flex items-center justify-center">
                          <Database className="text-muted-foreground" />
                        </div>
                      </div>
                      <div className="h-24 w-full bg-muted/50 rounded-lg border-2 border-dashed flex items-center justify-center text-xs text-muted-foreground">
                        Inventory List
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Project Grid */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-3">
            <h2 className="text-3xl font-bold">
              {filter === "All" ? t('projects.filters.all') : t(`projects.filters.${filter === "Game Dev" ? "gameDev" : filter.toLowerCase()}`)}
            </h2>
            <Badge variant="outline">{filteredProjects.length}</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col hover:border-primary/50 transition-all group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center">
                      {project.icon ? (
                        <project.icon className="h-6 w-6" />
                      ) : (
                        <Box className="h-6 w-6" />
                      )}
                    </div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {t(`projectsData.${project.id.toLowerCase()}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs px-2 py-0.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    {project.links.demo && (
                      <Button
                        variant="default"
                        className="flex-1"
                        onClick={() =>
                          window.open(project.links.demo!, "_blank")
                        }
                      >
                        {project.category === "Game Dev" ? t('projects.play') : t('projects.visit')}
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() =>
                          window.open(project.links.github!, "_blank")
                        }
                      >
                        <Github className="mr-2 h-4 w-4" /> {t('projects.code')}
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
