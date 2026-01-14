import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useNavigate, useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();

  return (
      <div className="min-h-screen bg-background">
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Faisal Almutairi</div>
        <div className="flex gap-6">
          {['Home', 'Projects', 'About'].map(item => (
            <button onClick={() => {navigate( item == "Home" ? "/" : `/${item.toLowerCase()}`)}} key={item} className="text-sm font-medium hover:text-primary transition-colors">
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
    {children}
  </div>
  );
}