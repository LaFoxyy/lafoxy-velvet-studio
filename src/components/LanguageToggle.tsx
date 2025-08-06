import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageToggle;