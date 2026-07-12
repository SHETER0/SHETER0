import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full hover:bg-muted"
      title={language === 'en' ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {language === 'en' ? "Switch to Arabic" : "Switch to English"}
      </span>
      <span className="ml-2 text-xs font-bold uppercase">
        {language === 'en' ? "AR" : "EN"}
      </span>
    </Button>
  );
};
