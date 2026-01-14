import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
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
  ExternalLink,
  Smartphone,
  Lock,
  Box,
  Crosshair,
  Camera,
  Type
} from "lucide-react";

// --- Project Data ---
const PROJECTS = [
  // --- Flagship ---
  {
    id: "reparo",
    title: "Reparo",
    category: "SaaS / Desktop",
    description: "A professional-grade Shop Management System engineered for mobile phone repair experts.",
    longDescription: "Reparo moves repair shops away from messy paper notebooks into a digital environment. It combines POS, Repair Tracking, and Inventory Management into one offline-first application.",
    tech: ["React 18", "Electron", "SQLite", "Firebase", "Tailwind"],
    features: [
      "Offline-First (Works without Wi-Fi)",
      "WhatsApp Automated Messages",
      "Inventory & Part Tracking",
      "Smart Ticketing System"
    ],
    links: {
      demo: "https://SHETER0.github.io/reparo-website/",
      github: null, 
    },
    featured: true
  },
  // --- Apps ---
  {
    id: "DevLocker",
    title: "DevLocker",
    category: "Web App",
    description: "A developer-focused code snippet and project organizer to keep your local workflow clean.",
    tech: ["React", "Electron", "TypeScript"],
    icon: Box,
    links: { demo: null, github: "https://github.com/SHETER0/DevLocker" },
    
    
  },
  {
    id: "passwordy",
    title: "Passwordy",
    category: "Desktop App",
    description: "A secure, offline password manager built to store credentials safely on your local machine.",
    tech: ["C#", ".NET", "Encryption"],
    icon: Lock,
    links: { demo: null, github: "https://github.com/SHETER0/Passwordy" }
  },
  // --- Game Dev / Unity ---
  {
    id: "seukweeo",
    title: "Seukweeo",
    category: "Game Dev",
    description: "A complete 2D platformer game developed in one week. Features custom physics and level design.",
    tech: ["Unity", "C#"],
    icon: Gamepad2,
    links: { demo: "https://SHETER0.itch.io/seukweeo", github: null }
  },
  {
    id: "procedural-ads",
    title: "Procedural ADS",
    category: "Unity Tool",
    description: "A mathematical approach to Aim Down Sights (ADS) in FPS games for smoother weapon handling.",
    tech: ["Unity", "C#", "3D Math"],
    icon: Crosshair,
    links: { demo: null, github: "https://github.com/SHETER0/Procedural-ADS" }
  },
  {
    id: "recoil-system",
    title: "Simple Recoil System",
    category: "Unity Tool",
    description: "A lightweight, customizable recoil pattern system for Unity shooters.",
    tech: ["Unity", "C#"],
    icon: Crosshair,
    links: { demo: null, github: "https://github.com/SHETER0/Simple-Unity-Recoil-System" }
  },
  {
    id: "easyshot",
    title: "EasyShot",
    category: "Unity Tool",
    description: "A utility tool for capturing high-resolution screenshots and cameras within Unity projects.",
    tech: ["Unity", "C#"],
    icon: Camera,
    links: { demo: null, github: "https://github.com/SHETER0/EasyShot" }
  },
  // --- Libraries ---
  {
    id: "text-loop",
    title: "React Animated Text",
    category: "Library",
    description: "A React component for smooth text looping animations, published for the community.",
    tech: ["React", "NPM", "CSS"],
    icon: Type,
    links: { demo: null, github: "https://github.com/SHETER0/react-animated-text-loop" }
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => {
    if (p.featured) return false;
    if (filter === "All") return true;
    if (filter === "Apps") return ["Desktop App", "SaaS / Desktop", "Web App"].includes(p.category);
    if (filter === "Game Dev") return ["Game Dev", "Unity Tool"].includes(p.category);
    if (filter === "Libraries") return p.category === "Library";
    return true;
  });

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight">My Projects</h1>
            <p className="text-lg text-muted-foreground">
              A collection of SaaS products, developer tools, and game mechanics.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
            {["All", "Apps", "Game Dev", "Libraries"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                  filter === f 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project (Reparo) */}
        {(filter === "All" || filter === "Apps") && (
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">Flagship Product</h2>
              <Badge className="bg-blue-600 hover:bg-blue-700">Production Ready</Badge>
            </div>
            
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Laptop className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Shop Management System
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold">Reparo</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Reparo moves repair shops away from messy paper notebooks into a digital environment. 
                      It combines POS, Repair Tracking, and Inventory Management into one offline-first application.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PROJECTS[0].tech.map((t) => (
                        <Badge key={t} variant="secondary" className="px-3 py-1">{t}</Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {PROJECTS[0].features?.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button size="lg">
                      <Globe className="mr-2 h-4 w-4" /> View Website
                    </Button>
                    <Button size="lg" variant="outline" disabled>
                      Proprietary Source
                    </Button>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-900 dark:to-blue-950 flex items-center justify-center p-8 border-t md:border-t-0 md:border-l">
                  <div className="w-full max-w-sm bg-background rounded-xl shadow-2xl border p-4 space-y-4 rotate-1">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">Reparo v1.0</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <div className="h-16 w-full bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                          <Smartphone className="text-blue-600"/>
                        </div>
                        <div className="h-16 w-full bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                          <Database className="text-green-600"/>
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
              {filter === "All" ? "All Projects" : filter}
            </h2>
            <Badge variant="outline">{filteredProjects.length}</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="flex flex-col hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center">
                      {project.icon ? <project.icon className="h-6 w-6" /> : <Box className="h-6 w-6" />}
                    </div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="text-xs px-2 py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    {project.links.demo && (
                      <Button variant="default" className="flex-1">
                        {project.category === "Game Dev" ? "Play" : "Visit"}
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" /> Code
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