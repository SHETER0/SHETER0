import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TranslationProvider } from './hooks/use-translation';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Index";
import NotFoundPage from "./pages/NotFound";
import ProjectsPage from './pages/projects';
import AboutPage from './pages/about';
import ContactForm from './pages/ContactForm'; // Import the form page
import ScrollToTop from './components/ScrollToTop';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <HashRouter>
            <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* New route for your Typeform */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;