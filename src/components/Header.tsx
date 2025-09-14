import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoFull} alt="Casimiro Academy" className="h-10" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#packages" className="text-foreground hover:text-primary transition-colors">
            Pacotes
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:block">
            Entrar
          </Button>
          <Button variant="academy">
            Matricule-se
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;