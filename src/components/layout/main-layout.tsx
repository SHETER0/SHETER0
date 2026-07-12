import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Terminal, Github, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "../language-switcher";
import { useTranslation } from "@/hooks/use-translation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.about'), path: '/about' }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* NAVIGATION */}
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300 nav-glow-line",
        scrolled
          ? "glass-card shadow-lg shadow-black/10"
          : "bg-background/60 backdrop-blur-sm border-b border-border/30"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-xl font-bold tracking-tighter group flex items-center gap-1"
          >
            <span className="group-hover:text-foreground transition-colors">Faisal</span>
            <span className="text-primary group-hover:text-primary/80 transition-colors">.Dev</span>
          </button>
          <div className="flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  onClick={() => navigate(item.path)}
                  key={item.label}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="ml-2 pl-2 border-l border-border/30">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-border/30 footer-gradient text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6 max-w-sm">
              <div className="text-foreground font-bold text-2xl tracking-tighter flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Terminal className="text-primary" size={16} />
                </div>
                Faisal<span className="text-primary">.Dev</span>
              </div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-4xl text-primary/10 font-serif select-none">
                  "
                </span>
                <p className="text-sm italic leading-relaxed text-muted-foreground pl-4 border-l-2 border-primary/20">
                  {t('footer.quote')}
                </p>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="grid grid-cols-2 gap-12 sm:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">
                  {t('footer.sitemap')}
                </h4>
                {[
                  { label: t('nav.home'), path: "/" },
                  { label: t('nav.projects'), path: "/projects" },
                  { label: t('nav.about'), path: "/about" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="text-sm text-left hover:text-foreground transition-colors link-slide flex items-center group w-fit"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-primary">
                      ›
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">
                  {t('footer.contact')}
                </h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/SHETER0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm hover:text-primary transition-colors duration-300 group w-fit"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                      <Github size={14} />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                    <ArrowUpRight size={12} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="mailto:fisal8260@outlook.sa"
                    className="flex items-center gap-2.5 text-sm hover:text-primary transition-colors duration-300 group w-fit"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                      <Mail size={14} />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
                    <ArrowUpRight size={12} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/966558071305"
                    className="flex items-center gap-2.5 text-sm hover:text-primary transition-colors duration-300 group w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                      <Phone size={14} />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">WhatsApp</span>
                    <ArrowUpRight size={12} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium">
              <span>© {currentYear} {t('footer.rights')}</span>
              <span className="text-border/50">/</span>
              <span className="text-primary/60">{t('footer.location')}</span>
            </div>

            {/* Visual Brand Mark */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono opacity-30 italic">
                {t('footer.builtWith')}
              </span>
              <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/15 flex items-center justify-center font-black text-xs text-primary/70 brand-mark-glow">
                FA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
