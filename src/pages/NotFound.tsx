import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            But we found your semicolon. ;
          </p>
        </div>
        <Button size="lg" onClick={() => navigate('/')}>
          Go Back Home
        </Button>
      </div>
    </div>
  );
}