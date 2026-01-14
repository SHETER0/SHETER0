import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, Laptop, Gamepad2, Rocket, Coffee, MapPin, Calendar, Mail, Github, Globe,
  Database, Smartphone, Terminal, CheckCircle2, Lock, Box, Crosshair, Camera, Type
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';

// Home Page
export default function HomePage() {
  const skills = [
    "React", "Next.js", "TypeScript", "Electron", 
    "C#", "Unity", "SQLite", "Firebase", "Tailwind"
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for opportunities</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Hello, I'm Faisal 👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A self-taught software engineer from Saudi Arabia, specialized in building robust 
              desktop and web applications. <span className="text-foreground font-semibold">Coding since 2019.</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold">Flagship Project</h2>
            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0">
              Production Ready
            </Badge>
          </div>
          
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-primary/40 text-primary">Desktop & Cloud</Badge>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      Reparo
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A professional-grade Shop Management System engineered for mobile phone repair experts.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                    <div className="flex gap-3 group">
                      <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg h-fit group-hover:scale-110 transition-transform">
                        <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Offline-First</h4>
                        <p className="text-sm text-muted-foreground">Electron & SQLite</p>
                      </div>
                    </div>
                    <div className="flex gap-3 group">
                      <div className="p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg h-fit group-hover:scale-110 transition-transform">
                        <Smartphone className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Smart Sync</h4>
                        <p className="text-sm text-muted-foreground">Firebase bridge</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="text-xs">Real-time Updates</Badge>
                    <Badge variant="secondary" className="text-xs">Inventory Management</Badge>
                    <Badge variant="secondary" className="text-xs">Customer Tracking</Badge>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 hover:scale-105 transition-transform">
                    <Globe className="mr-2 h-4 w-4" /> 
                    View Landing Page
                  </Button>
                  <Button size="lg" variant="outline" disabled className="flex-1">
                    <Lock className="mr-2 h-4 w-4" />
                    Proprietary
                  </Button>
                </div>
              </div>
              
              {/* Visual */}
              <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center p-8 md:p-12 border-t md:border-t-0 md:border-l relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50" style={{
                  maskImage: 'radial-gradient(circle at center, transparent 30%, black 100%)'
                }} />
                
                <div className="w-full max-w-sm bg-background rounded-xl shadow-2xl border-2 p-5 space-y-4 hover:rotate-0 rotate-1 transition-transform duration-300 relative z-10">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">Reparo v1.0</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="h-20 w-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-lg flex items-center justify-center shadow-sm">
                        <Smartphone className="text-blue-600 dark:text-blue-400 h-8 w-8"/>
                      </div>
                      <div className="h-20 w-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 rounded-lg flex items-center justify-center shadow-sm">
                        <Database className="text-green-600 dark:text-green-400 h-8 w-8"/>
                      </div>
                    </div>
                    <div className="h-28 w-full bg-muted/50 rounded-lg border-2 border-dashed flex items-center justify-center text-xs text-muted-foreground font-medium">
                      <div className="text-center space-y-1">
                        <Box className="h-6 w-6 mx-auto mb-2 opacity-50" />
                        Inventory Management
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Other Projects */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card className="flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="mb-3 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Rocket className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">Seukweeo</CardTitle>
                <CardDescription className="text-base">Unity 2D Platformer</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A complete game developed in just one week using Unity and C#. 
                  Features custom physics, level design, and polished mechanics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Unity</Badge>
                  <Badge variant="secondary" className="text-xs">C#</Badge>
                  <Badge variant="secondary" className="text-xs">Game Dev</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play on Itch.io
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 border-2 border-dashed group">
              <CardHeader>
                <div className="mb-3 w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Code2 className="h-7 w-7 text-gray-600 dark:text-gray-400" />
                </div>
                <CardTitle className="text-2xl">Open Source</CardTitle>
                <CardDescription className="text-base">Explore my code</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Dive into my experiments with Next.js, Tailwind, and Express.js. 
                  All available on my GitHub profile for you to explore and learn from.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="text-xs">Tailwind</Badge>
                  <Badge variant="secondary" className="text-xs">Express</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </CardFooter>
            </Card>

            {/* Add a "More Coming Soon" card */}
            <Card className="flex flex-col items-center justify-center hover:border-primary/50 transition-all duration-300 bg-muted/30 border-dashed">
              <CardContent className="pt-12 pb-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center mx-auto">
                  <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">More Coming Soon</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Currently brewing new ideas and building exciting projects
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

      </div>
    </MainLayout>
  );
}