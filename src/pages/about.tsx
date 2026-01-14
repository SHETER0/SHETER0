import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, Laptop, Gamepad2, Rocket, Coffee, MapPin, Calendar, Mail, Github, Globe,
  Database, Smartphone, Terminal, CheckCircle2, Lock, Box, Crosshair, Camera, Type
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
const AboutPage = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Electron"]
    },
    {
      title: "Backend & Database",
      icon: Code2,
      skills: ["Firebase", "SQLite", "Express.js", ".NET"]
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      skills: ["Unity", "C#", "2D/3D Game Design", "Physics Systems"]
    },
    {
      title: "Tools & Others",
      icon: Laptop,
      skills: ["Git", "NPM Publishing", "Desktop Apps", "API Integration"]
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Started Coding Journey",
      description: "Began self-teaching programming with C# and Unity game development."
    },
    {
      year: "2020-2021",
      title: "Unity Game Development",
      description: "Built Seukweeo platformer game and created multiple Unity tools including Procedural ADS and recoil systems."
    },
    {
      year: "2022-2023",
      title: "Desktop Applications",
      description: "Developed Passwordy (password manager) using C# and .NET, focusing on security and data management."
    },
    {
      year: "2023-2024",
      title: "Web & Full-Stack",
      description: "Transitioned to React, TypeScript, and Electron. Built web applications (SHETER0) and published React components to NPM."
    },
    {
      year: "2024-Present",
      title: "Reparo & Production Apps",
      description: "Launched Reparo shop management system with offline-first architecture, Firebase sync, and professional features."
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Saudi Arabia 🇸🇦</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Coding Since 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  <span>Self-Taught Developer</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm <span className="font-semibold text-foreground">Faisal Almutairi</span>, 
                a self-taught software engineer passionate about building elegant solutions to real-world problems. 
                I started my coding journey in 2019 and have since specialized in creating robust desktop applications, 
                web platforms, and game development tools.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical precision with user-centered design. Whether it's a SaaS platform 
                like Reparo or Unity tools for game developers, I focus on creating software that's both powerful 
                and intuitive.
              </p>

              <div className="flex gap-3 pt-4">
                <Button size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Avatar */}
            <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
              <div className="text-white text-7xl font-bold">FA</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            <Rocket className="h-7 w-7 text-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="hover:border-primary/50 transition-all">
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
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
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
          <h2 className="text-3xl font-bold">Journey Timeline</h2>
          <div className="space-y-8 relative before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-border">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-10 space-y-2">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="flex items-baseline gap-3">
                  <Badge variant="outline" className="font-mono text-sm">{item.year}</Badge>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Development Philosophy</h2>
          <Card className="bg-secondary/20 shadow-lg">
            <CardContent className="pt-8 space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Code Quality First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code that's built to last. Every project 
                  is an opportunity to learn and improve.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  User-Centered Design
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology should serve people. I focus on creating intuitive experiences 
                  that solve real problems.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The tech landscape evolves rapidly. I stay curious and embrace new tools 
                  and methodologies to deliver better solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 pt-8">
          <h2 className="text-3xl font-bold">Let's Build Something Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm currently open to freelance opportunities and collaborations. 
            Whether you need a custom desktop app, web platform, or game development tool, 
            let's discuss how we can work together.
          </p>
          <div className="flex gap-3 justify-center pt-4">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </div>
        </section>

      </div>
    </MainLayout>
  );
};
export default AboutPage;