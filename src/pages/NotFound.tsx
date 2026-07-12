import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";

export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">{t('notFound.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t('notFound.message')}
          </p>
        </div>
        <Button size="lg" onClick={() => navigate("/")}>
          {t('notFound.goHome')}
        </Button>
      </div>
    </div>
  );
}
