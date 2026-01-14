import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  X, 
  Home, 
  Gamepad2, 
  Wrench, 
  User, 
  Github, 
  ExternalLink 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onClose, className }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Overview", path: "/" },
    { icon: Wrench, label: "Projects", path: "/projects" },
    { icon: User, label: "About Me", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <aside className={cn("w-72 border-r bg-background flex flex-col h-full", className)}>
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">FA</span>
          </div>
          <h2 className="font-bold text-lg tracking-tight">Faisal.Dev</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-6 px-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 mb-1",
                isActive(item.path) && "bg-secondary font-medium"
              )}
              onClick={() => handleNavigation(item.path)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Socials
          </h3>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={() => window.open("https://github.com/SHETER00", "_blank")}
            >
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={() => window.open("https://SHETER00.itch.io", "_blank")}
            >
              <Gamepad2 className="h-4 w-4" />
              Itch.io
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-muted/20">
        <div className="rounded-lg bg-card p-4 border shadow-sm">
          <p className="text-sm font-medium mb-1">Status: Open to Work</p>
          <p className="text-xs text-muted-foreground">
            Based in Saudi Arabia 🇸🇦
          </p>
        </div>
      </div>
    </aside>
  );
}